"use server"

import { db } from "@/database/drizzle"
import { shops, users } from "@/database/schema"
import { eq } from "drizzle-orm"

export const getUserById = async(userId: string)=>{
    try {
        const user = await db.select().from(users).where(eq(users.id , userId)).limit(1)
        return user[0]
    } catch (error) {
        console.log(error)
    }
}
export const getAllShops = async()=>{
    try {
        const allshops = await db.select().from(shops).orderBy(shops.opened)
        return allshops
    } catch (error) {
        console.log(error)
    }
}
export const getShopById = async(shopId : string)=>{
    try {
        const shop = await db.select().from(shops).where(eq(shops.id , shopId))
    } catch (error) {
        
    }
}