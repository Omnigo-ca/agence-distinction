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
      email: "",
      phone: "",
      serviceType: "",
      eventDate: "",
      cityAddress: "",
      theme: "",
      budget: "",
      needsRecommendation: false,
      annualProgramming: false,
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
          <Label htmlFor="phone">Téléphone</Label>
          <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
        </div>
      </div>

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

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="serviceType">Type de service</Label>
          <Input
            id="serviceType"
            placeholder="Spectacle, troubadour, soirée dansante, programmation…"
            {...register("serviceType")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="eventDate">Disponibilités / date souhaitée</Label>
          <Input id="eventDate" type="date" {...register("eventDate")} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="cityAddress">Ville / adresse</Label>
          <Input
            id="cityAddress"
            placeholder="RPA, CHSLD, résidence, ville…"
            {...register("cityAddress")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">Budget approximatif</Label>
          <Input id="budget" placeholder="Optionnel" {...register("budget")} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="theme">Thématique souhaitée</Label>
        <Input
          id="theme"
          placeholder="Noël, cabane à sucre, années rétro…"
          {...register("theme")}
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
          <input
            type="checkbox"
            id="needsRecommendation"
            className="mt-1 size-4 rounded border-border accent-primary"
            {...register("needsRecommendation")}
          />
          <Label htmlFor="needsRecommendation" className="cursor-pointer leading-relaxed">
            Je ne sais pas encore quelle thématique choisir, j&apos;aimerais une
            recommandation.
          </Label>
        </div>

        <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
          <input
            type="checkbox"
            id="annualProgramming"
            className="mt-1 size-4 rounded border-border accent-primary"
            {...register("annualProgramming")}
          />
          <Label htmlFor="annualProgramming" className="cursor-pointer leading-relaxed">
            Je souhaite planifier plusieurs spectacles dans l&apos;année.
          </Label>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Décrivez votre établissement, vos résidents et ce que vous aimeriez organiser…"
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
