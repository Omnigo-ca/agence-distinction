"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2Icon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  artistApplicationSchema,
  validateProfilePhoto,
  type ArtistApplicationValues,
} from "@/lib/validations/artist-application"

function FieldLabel({
  htmlFor,
  children,
  required = false,
}: {
  htmlFor?: string
  children: React.ReactNode
  required?: boolean
}) {
  return (
    <Label htmlFor={htmlFor} className="text-base font-semibold text-foreground">
      {children}
      {required ? (
        <span className="ml-1.5 text-sm font-medium text-primary">
          (Nécessaire)
        </span>
      ) : null}
    </Label>
  )
}

export function ArtistApplicationForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [photoError, setPhotoError] = useState<string | null>(null)
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null)
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [photoInputKey, setPhotoInputKey] = useState(0)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ArtistApplicationValues>({
    resolver: zodResolver(artistApplicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      description: "",
      youtubeUrl: "",
    },
  })

  const handleFormSubmit = async (values: ArtistApplicationValues) => {
    setStatus("idle")

    const photoValidationError = validateProfilePhoto(photoFile)

    if (photoValidationError) {
      setPhotoError(photoValidationError)
      return
    }

    setPhotoError(null)

    const formData = new FormData()
    formData.append("firstName", values.firstName)
    formData.append("lastName", values.lastName)
    formData.append("email", values.email)
    formData.append("phone", values.phone)
    formData.append("description", values.description)
    formData.append("youtubeUrl", values.youtubeUrl)
    formData.append("profilePhoto", photoFile!)

    try {
      const response = await fetch("/api/artist-application", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi")
      }

      setStatus("success")
      reset()
      setPhotoFile(null)
      setSelectedFileName(null)
      setPhotoInputKey((key) => key + 1)
    } catch {
      setStatus("error")
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-8"
      noValidate
      encType="multipart/form-data"
    >
      <div className="space-y-3">
        <FieldLabel required>Nom</FieldLabel>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Input
              id="firstName"
              autoComplete="given-name"
              aria-invalid={!!errors.firstName}
              {...register("firstName")}
            />
            <p className="text-sm text-muted-foreground">Prénom</p>
            {errors.firstName ? (
              <p className="text-sm text-destructive">
                {errors.firstName.message}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Input
              id="lastName"
              autoComplete="family-name"
              aria-invalid={!!errors.lastName}
              {...register("lastName")}
            />
            <p className="text-sm text-muted-foreground">Nom de famille</p>
            {errors.lastName ? (
              <p className="text-sm text-destructive">
                {errors.lastName.message}
              </p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <FieldLabel htmlFor="email" required>
            Adresse courriel
          </FieldLabel>
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
          <FieldLabel htmlFor="phone" required>
            Téléphone
          </FieldLabel>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone ? (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <FieldLabel htmlFor="description" required>
          Décrivez-vous
        </FieldLabel>
        <Textarea
          id="description"
          rows={7}
          placeholder="Parlez-nous de votre parcours, de votre répertoire et de votre expérience auprès des aînés…"
          aria-invalid={!!errors.description}
          {...register("description")}
        />
        {errors.description ? (
          <p className="text-sm text-destructive">
            {errors.description.message}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <FieldLabel htmlFor="youtubeUrl" required>
          Joindre votre lien YouTube
        </FieldLabel>
        <Input
          id="youtubeUrl"
          type="url"
          placeholder="https://www.youtube.com/..."
          aria-invalid={!!errors.youtubeUrl}
          {...register("youtubeUrl")}
        />
        {errors.youtubeUrl ? (
          <p className="text-sm text-destructive">
            {errors.youtubeUrl.message}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <FieldLabel htmlFor="profilePhoto" required>
          Joindre votre photo de profil
        </FieldLabel>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <input
            key={photoInputKey}
            id="profilePhoto"
            type="file"
            accept=".jpg,.jpeg,.png,.gif,image/jpeg,image/png,image/gif"
            className={cn(
              "h-10 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none",
              "file:mr-4 file:rounded-full file:border-0 file:bg-primary/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary hover:file:bg-primary/15",
              "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
              photoError && "border-destructive ring-3 ring-destructive/20"
            )}
            aria-invalid={!!photoError}
            onChange={(event) => {
              const file = event.target.files?.[0] ?? null
              setPhotoFile(file)
              setSelectedFileName(file?.name ?? null)
              setPhotoError(
                file
                  ? validateProfilePhoto(file)
                  : "La photo de profil est requise"
              )
            }}
          />
          {selectedFileName ? (
            <span className="text-sm text-muted-foreground">
              {selectedFileName}
            </span>
          ) : (
            <span className="text-sm text-muted-foreground">
              Aucun fichier choisi
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          Types de fichiers acceptés : jpg, jpeg, png, gif.
        </p>
        {photoError ? (
          <p className="text-sm text-destructive">{photoError}</p>
        ) : null}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="h-12 w-full rounded-full text-sm font-semibold tracking-[0.14em] uppercase shadow-md shadow-primary/15 hover:bg-primary/90 sm:w-auto sm:min-w-[220px]"
      >
        {isSubmitting ? (
          <>
            <Loader2Icon className="size-4 animate-spin" />
            Envoi en cours…
          </>
        ) : (
          "Envoyer"
        )}
      </Button>

      {status === "success" ? (
        <p className="text-sm font-medium text-primary" role="status">
          Merci! Votre candidature a été envoyée. L&apos;équipe de
          l&apos;Agence Distinction vous contactera sous peu.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          Une erreur est survenue. Veuillez réessayer ou nous écrire à{" "}
          <a href="mailto:info@agencedistinction.ca" className="underline">
            info@agencedistinction.ca
          </a>
          .
        </p>
      ) : null}
    </form>
  )
}
