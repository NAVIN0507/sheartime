"use server"

import { db } from "@/database/drizzle"
import { shops, users } from "@/database/schema"

import { eq } from "drizzle-orm"
import { hash } from "bcryptjs";
import { signIn } from "@/auth";
import { messaging, sendSMS } from "../appwrite/appwrite.config";
import { ID } from "node-appwrite";
import { parseStringify } from "../utils";
import { sendSMSToUser } from "../twillio/sms";
export const signInWithCredentails =async({password , email} : Pick<AuthCredentials , "email" | "password">)=>{
   
    try {
    const result = await signIn('credentials' , {
        email,
        password,
        redirect:false
    })
    if(result?.error){
        return {success : false , error :"Invalid credentials"}
    }
    const userData = await db.select().from(users).where(eq(users.email , email)).limit(1)
    return{success : true , userData}
    } catch (error) {
        console.log(error)
        return {success : false , error :"Sign in Error"}
    }
}
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
        //@ts-ignore
    const result  =  await db.insert(users).values({
            fullName,
            phone,
            email,
            password:hashedPassword,
            
    })
}
       const userData = await db.select().from(users).where(eq(users.email , email)).limit(1)

       const smsMessage = `Hi 👋 ${userData[0].fullName} welcome to Sheartime. Create your first Booking now at your faviorate shop.Don't stand in queue make in time and make your style`;
await sendSMSToUser(userData[0].phone , smsMessage);
        return {success : true , userData}
    } catch (error) {
         console.log(error , "Signup ERROR")
        return {success : false ,error :"Sign up Error"}
        
    }
}
export const SignUpAdmin = async (adminId : string)=>{
    try {
        const result = await db.insert(shops).values({
        adminId
    })
    return {success : true}
    } catch (error) {
         console.log(error , "Signup ERROR")
        return {success : false ,error :"Sign up Error"}
    }
   

}
