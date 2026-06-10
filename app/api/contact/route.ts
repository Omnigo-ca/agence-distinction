import { Resend } from "resend"
import { NextResponse } from "next/server"

import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact"
import { siteConfig } from "@/lib/site-config"

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

const buildEmailBody = (values: ContactFormValues) => {
  const lines = [
    `Nom : ${values.name}`,
    `Courriel : ${values.email}`,
  ]

  if (values.phone) {
    lines.push(`Téléphone : ${values.phone}`)
  }

  lines.push("", "Message :", values.message)

  return lines.join("\n")
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactFormSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Données invalides" },
        { status: 400 }
      )
    }

    const recipient =
      siteConfig.contact.recipientEmail || process.env.CONTACT_RECIPIENT_EMAIL

    if (!recipient) {
      return NextResponse.json(
        { error: "Destinataire non configuré" },
        { status: 500 }
      )
    }

    if (!resend) {
      console.info("[contact] RESEND_API_KEY manquant — message simulé :", parsed.data)
      return NextResponse.json({ success: true, simulated: true })
    }

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
      to: recipient,
      replyTo: parsed.data.email,
      subject: `Nouveau message — ${siteConfig.business.name}`,
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
