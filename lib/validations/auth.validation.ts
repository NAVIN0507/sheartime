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
export const shopSchema = z.object({
  shopName: z.string().min(3 , {message:"Shop name should be atleast 3 charcters"}).max(50),
  shopAddress: z.string().min(10 , {message:"Shop address should be atleast 10 charcters"}).max(200),
  shopPhone: z.coerce.number(),
  shopEmail: z.string().email(),
  shopDescription: z.string().min(10 , {message:"Shop description should be atleast 10 charcters"}).max(500),
  shopImage: z.string()

})