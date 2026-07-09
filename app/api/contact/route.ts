import { Resend } from "resend"
import { NextResponse } from "next/server"

import {
  submissionFormSchema,
  type SubmissionFormValues,
} from "@/lib/validations/contact"
import { siteConfig } from "@/lib/site-config"

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

const buildEmailBody = (values: SubmissionFormValues) => {
  const lines = [
    `Nom : ${values.name}`,
    `Courriel : ${values.email}`,
  ]

  if (values.organization) lines.push(`Organisation : ${values.organization}`)
  if (values.establishmentType) lines.push(`Type d'établissement : ${values.establishmentType}`)
  if (values.phone) lines.push(`Téléphone : ${values.phone}`)
  if (values.city) lines.push(`Ville / région : ${values.city}`)
  if (values.eventType) lines.push(`Type d'événement : ${values.eventType}`)
  if (values.eventDate) lines.push(`Date souhaitée : ${values.eventDate}`)
  if (values.participants) lines.push(`Participants : ${values.participants}`)
  if (values.ambiance) lines.push(`Ambiance recherchée : ${values.ambiance}`)
  if (values.theme) lines.push(`Thème souhaité : ${values.theme}`)
  if (values.budget) lines.push(`Budget : ${values.budget}`)
  if (values.needsRecommendation) lines.push(`Demande de recommandation : Oui`)

  lines.push("", "Message :", values.message)

  return lines.join("\n")
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = submissionFormSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Données invalides" },
        { status: 400 }
      )
    }

    const recipient =
      siteConfig.contact.recipientEmail || process.env.CONTACT_RECIPIENT_EMAIL

    if (!recipient) {
      console.info("[contact] Destinataire non configuré — message simulé :", parsed.data)
      return NextResponse.json({ success: true, simulated: true })
    }

    if (!resend) {
      console.info("[contact] RESEND_API_KEY manquant — message simulé :", parsed.data)
      return NextResponse.json({ success: true, simulated: true })
    }

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
      to: recipient,
      replyTo: parsed.data.email,
      subject: `Nouvelle soumission — ${siteConfig.business.name}`,
      text: buildEmailBody(parsed.data),
    })

    if (error) {
      console.error("[contact] Erreur Resend :", error)
      return NextResponse.json(
        { error: "Erreur lors de l'envoi" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[contact] Erreur inattendue :", error)
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    )
  }
}
