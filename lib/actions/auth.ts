"use server"

import { db } from "@/database/drizzle"
import { users } from "@/database/schema"

import { eq } from "drizzle-orm"
import { hash } from "bcryptjs";
export const SignUp = async({fullName , password , phone , email , isAdmin}:AuthCredentials)=>{
    const existingUser = await db.select().from(users).where(eq(users.email , email)).limit(1);
    if(existingUser.length >0){
        return {success : false , error :"User already exists"}
    }
    console.log(isAdmin)
    const hashedPassword = await hash(password , 10);
    try {
        if(isAdmin){
            //@ts-ignore
      const result  =  await db.insert(users).values({
            fullName,
            phone,
            email,
            password:hashedPassword,
            isAdmins:true
        })
    }
    //@ts-ignore
    else{
    const result  =  await db.insert(users).values({
            fullName,
            phone,
            email,
            password:hashedPassword,
            
    })
}
       const userData = await db.select().from(users).where(eq(users.email , email)).limit(1)
        return {success : true , userData}
    } catch (error) {
         console.log(error , "Signup ERROR")
        return {success : false ,error :"Sign up Error"}
        
    }
}