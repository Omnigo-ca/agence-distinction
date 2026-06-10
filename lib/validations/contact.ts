import { z } from "zod"

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom est trop long"),
  email: z.email("Courriel invalide"),
  phone: z
    .string()
    .max(20, "Le numéro de téléphone est trop long")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(2000, "Le message est trop long"),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
