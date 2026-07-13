import { Resend } from "resend"
import { NextResponse } from "next/server"

import {
  ACCEPTED_PROFILE_PHOTO_TYPES,
  artistApplicationSchema,
  MAX_PROFILE_PHOTO_BYTES,
} from "@/lib/validations/artist-application"
import { siteConfig } from "@/lib/site-config"

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

function getStringField(formData: FormData, key: string): string {
  const value = formData.get(key)
  return typeof value === "string" ? value.trim() : ""
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const parsed = artistApplicationSchema.safeParse({
      firstName: getStringField(formData, "firstName"),
      lastName: getStringField(formData, "lastName"),
      email: getStringField(formData, "email"),
      phone: getStringField(formData, "phone"),
      description: getStringField(formData, "description"),
      youtubeUrl: getStringField(formData, "youtubeUrl"),
    })

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Données invalides", details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const profilePhoto = formData.get("profilePhoto")

    if (!(profilePhoto instanceof File) || profilePhoto.size === 0) {
      return NextResponse.json(
        { error: "La photo de profil est requise" },
        { status: 400 }
      )
    }

    if (
      !ACCEPTED_PROFILE_PHOTO_TYPES.includes(
        profilePhoto.type as (typeof ACCEPTED_PROFILE_PHOTO_TYPES)[number]
      )
    ) {
      return NextResponse.json(
        { error: "Type de fichier non accepté" },
        { status: 400 }
      )
    }

    if (profilePhoto.size > MAX_PROFILE_PHOTO_BYTES) {
      return NextResponse.json(
        { error: "La photo dépasse la taille maximale de 5 Mo" },
        { status: 400 }
      )
    }

    const values = parsed.data
    const recipient =
      siteConfig.contact.recipientEmail || process.env.CONTACT_RECIPIENT_EMAIL

    const emailBody = [
      "Nouvelle candidature artiste",
      "",
      `Prénom : ${values.firstName}`,
      `Nom de famille : ${values.lastName}`,
      `Courriel : ${values.email}`,
      `Téléphone : ${values.phone}`,
      `Lien YouTube : ${values.youtubeUrl}`,
      "",
      "Description :",
      values.description,
    ].join("\n")

    if (!recipient) {
      console.info(
        "[artist-application] Destinataire non configuré, candidature simulée :",
        values
      )
      return NextResponse.json({ success: true, simulated: true })
    }

    if (!resend) {
      console.info(
        "[artist-application] RESEND_API_KEY manquant, candidature simulée :",
        values
      )
      return NextResponse.json({ success: true, simulated: true })
    }

    const photoBuffer = Buffer.from(await profilePhoto.arrayBuffer())

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
      to: recipient,
      replyTo: values.email,
      subject: `Nouvelle candidature artiste — ${values.firstName} ${values.lastName}`,
      text: emailBody,
      attachments: [
        {
          filename: profilePhoto.name || "photo-profil.jpg",
          content: photoBuffer,
        },
      ],
    })

    if (error) {
      console.error("[artist-application] Erreur Resend :", error)
      return NextResponse.json(
        { error: "Erreur lors de l'envoi" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[artist-application] Erreur inattendue :", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
