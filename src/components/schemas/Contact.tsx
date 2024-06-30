import { z } from "zod";

export const contactTypeOptions = [
  "Familia",
  "Trabajo",
  "Amigo",
  "Otro",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Nombre requerido" })
    .min(3, { message: "Longitud minima 3" }),
  lastname: z
    .string()
    .min(1, { message: "Apellido requerido" })
    .min(3, { message: "Longitud minima 3" }),
  email: z
    .string()
    .min(1, { message: "Email requerido" })
    .email("Correo invalido."),
  type: z.enum(contactTypeOptions, {
    errorMap: () => ({ message: "Seleccione Tipo" }),
  }),
});

export type Contact = z.infer<typeof contactSchema> & { id: string };
