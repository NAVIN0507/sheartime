import { Phone } from "lucide-react"
import { z } from "zod"
 
export const signInSchema = z.object({
  email: z.string().email(),
  password:z.string().min(8)
})
export const signUpSchema = z.object({
  name:z.string().min(3 , {message:"Name should be atleast 3 charcters"}).max(25),
  phone:z.coerce.number(),
  email: z.string().email(),
  password:z.string().min(8),
  role:z.string()
})