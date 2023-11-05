import { z } from 'zod'

const PhoneticSchema = z.object({
  text: z.string(),
  audio: z.string().optional(),
})

const DefinitionSchema = z.object({
  definition: z.string(),
  example: z.string().optional(),
  synonyms: z.array(z.string()),
  antonyms: z.array(z.string()),
})

const MeaningSchema = z.object({
  partOfSpeech: z.string(),
  definitions: z.array(DefinitionSchema),
})

export const ApiResponseSchema = z.object({
  word: z.string(),
  phonetic: z.string(),
  phonetics: z.array(PhoneticSchema),
  origin: z.string().optional(),
  meanings: z.array(MeaningSchema),
})

export type ApiResponse = z.infer<typeof ApiResponseSchema>
