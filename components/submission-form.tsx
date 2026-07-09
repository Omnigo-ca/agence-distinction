"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2Icon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  submissionFormSchema,
  type SubmissionFormValues,
} from "@/lib/validations/contact"

export function SubmissionForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SubmissionFormValues>({
    resolver: zodResolver(submissionFormSchema),
    defaultValues: {
      name: "",
      organization: "",
      establishmentType: "",
      email: "",
      phone: "",
      city: "",
      eventType: "",
      eventDate: "",
      participants: "",
      ambiance: "",
      theme: "",
      budget: "",
      needsRecommendation: false,
      message: "",
    },
  })

  const handleFormSubmit = async (values: SubmissionFormValues) => {
    setStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi")
      }

      setStatus("success")
      reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-5"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nom *</Label>
          <Input
            id="name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name ? (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="organization">Organisation</Label>
          <Input id="organization" {...register("organization")} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="establishmentType">Type d&apos;établissement</Label>
          <Input
            id="establishmentType"
            placeholder="RPA, CHSLD, résidence, organisation…"
            {...register("establishmentType")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">Ville / région</Label>
          <Input id="city" {...register("city")} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Courriel *</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Téléphone</Label>
          <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="eventType">Type d&apos;événement</Label>
          <Input
            id="eventType"
            placeholder="Fête, spectacle, programmation annuelle…"
            {...register("eventType")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="eventDate">Date souhaitée</Label>
          <Input id="eventDate" type="date" {...register("eventDate")} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="participants">Nombre de participants</Label>
          <Input id="participants" {...register("participants")} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">Budget approximatif</Label>
          <Input id="budget" placeholder="Optionnel" {...register("budget")} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="ambiance">Ambiance recherchée</Label>
          <Input
            id="ambiance"
            placeholder="Nostalgique, festive, douce…"
            {...register("ambiance")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="theme">Thème souhaité</Label>
          <Input
            id="theme"
            placeholder="Noël, cabane à sucre, années rétro…"
            {...register("theme")}
          />
        </div>
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
        <input
          type="checkbox"
          id="needsRecommendation"
          className="mt-1 size-4 rounded border-border accent-primary"
          {...register("needsRecommendation")}
        />
        <Label htmlFor="needsRecommendation" className="cursor-pointer leading-relaxed">
          Je ne suis pas certain du thème, j&apos;aimerais une recommandation.
        </Label>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Décrivez votre événement, votre public et ce que vous aimeriez créer…"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message ? (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        ) : null}
      </div>

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2Icon className="size-4 animate-spin" />
            Envoi en cours…
          </>
        ) : (
          "Demander une soumission"
        )}
      </Button>

      {status === "success" ? (
        <p className="text-sm font-medium text-primary" role="status">
          Merci! Votre demande a été envoyée. Marie-Josée et son équipe vous
          répondront sous peu.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          Une erreur est survenue. Veuillez réessayer ou nous contacter par
          téléphone.
        </p>
      ) : null}
    </form>
  )
}
