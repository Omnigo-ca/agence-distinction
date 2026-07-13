import { z } from "zod"

const youtubeUrlPattern = /youtube\.com|youtu\.be/i

export const artistApplicationSchema = z.object({
  firstName: z
    .string()
    .min(2, "Le prénom doit contenir au moins 2 caractères")
    .max(60, "Le prénom est trop long"),
  lastName: z
    .string()
    .min(2, "Le nom de famille doit contenir au moins 2 caractères")
    .max(60, "Le nom de famille est trop long"),
  email: z.email("Adresse courriel invalide"),
  phone: z
    .string()
    .min(7, "Le numéro de téléphone est requis")
    .max(20, "Le numéro de téléphone est trop long"),
  description: z
    .string()
    .min(20, "Veuillez décrire votre parcours en quelques phrases")
    .max(3000, "La description est trop longue"),
  youtubeUrl: z
    .string()
    .url("Lien YouTube invalide")
    .refine(
      (value) => youtubeUrlPattern.test(value),
      "Veuillez fournir un lien YouTube valide"
    ),
})

export type ArtistApplicationValues = z.infer<typeof artistApplicationSchema>

export const ACCEPTED_PROFILE_PHOTO_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
] as const

export const MAX_PROFILE_PHOTO_BYTES = 5 * 1024 * 1024

export function validateProfilePhoto(file: File | null | undefined): string | null {
  if (!file || file.size === 0) {
    return "La photo de profil est requise"
  }

  if (!ACCEPTED_PROFILE_PHOTO_TYPES.includes(file.type as (typeof ACCEPTED_PROFILE_PHOTO_TYPES)[number])) {
    return "Types de fichiers acceptés : jpg, jpeg, png, gif"
  }

  if (file.size > MAX_PROFILE_PHOTO_BYTES) {
    return "La photo ne doit pas dépasser 5 Mo"
  }

  return null
}
