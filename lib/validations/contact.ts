import { z } from "zod"

export const submissionFormSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom est trop long"),
  organization: z
    .string()
    .max(150, "Le nom de l'organisation est trop long")
    .optional()
    .or(z.literal("")),
  establishmentType: z
    .string()
    .max(100, "Le type d'établissement est trop long")
    .optional()
    .or(z.literal("")),
  email: z.email("Courriel invalide"),
  phone: z
    .string()
    .max(20, "Le numéro de téléphone est trop long")
    .optional()
    .or(z.literal("")),
  city: z
    .string()
    .max(100, "La ville est trop longue")
    .optional()
    .or(z.literal("")),
  eventType: z
    .string()
    .max(150, "Le type d'événement est trop long")
    .optional()
    .or(z.literal("")),
  eventDate: z
    .string()
    .max(50, "La date est trop longue")
    .optional()
    .or(z.literal("")),
  participants: z
    .string()
    .max(50, "Le nombre de participants est trop long")
    .optional()
    .or(z.literal("")),
  ambiance: z
    .string()
    .max(200, "L'ambiance est trop longue")
    .optional()
    .or(z.literal("")),
  theme: z
    .string()
    .max(200, "Le thème est trop long")
    .optional()
    .or(z.literal("")),
  budget: z
    .string()
    .max(100, "Le budget est trop long")
    .optional()
    .or(z.literal("")),
  needsRecommendation: z.boolean().optional(),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(2000, "Le message est trop long"),
})

export type SubmissionFormValues = z.infer<typeof submissionFormSchema>

// Schéma simplifié pour compatibilité contact rapide
export const contactFormSchema = submissionFormSchema.pick({
  name: true,
  email: true,
  phone: true,
  message: true,
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
