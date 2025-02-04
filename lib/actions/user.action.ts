"use server"

import { db } from "@/database/drizzle"
import { bookings, shops, users } from "@/database/schema"
import { and, asc, desc, eq } from "drizzle-orm"

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
export const getShopByShopId = async(shopId : string)=>{
    try {
        const result = await db.select().from(shops).where(eq(shops.id , shopId))
        return result[0]
    } catch (error) {
        console.log(error);
    }
}
export const getShopsByShopId = async(shopId : string)=>{
    try {
        const result = await db.select().from(shops).where(eq(shops.id , shopId))
        return result
    } catch (error) {
        console.log(error);
    }
}
export const addBooking = async({userId , shopId , dateTime}:BookingCredentials)=>{
    try {
        const addBooking = await db.insert(bookings).values({
            userId,
            shopId,
            bookingDate: dateTime
        })
        return {success : true}
    } catch (error) {
        console.log(error);
        return {success : false}        
    }

}
export const getBookingByUserId = async(userId: string)=>{
    try {
        const result = await db.select().from(bookings).where(and(eq(bookings.userId , userId) , eq(bookings.bookingStatus , 'PENDING'))).orderBy(desc(bookings.createdAt));
        return result
    } catch (error) {
        console.log(error)
    }
}

export const deleteBookingById = async(bookingId : string)=>{
    try {
        const deleteBooking = await db.delete(bookings).where(eq(bookings.id , bookingId))
        return {success : true}
    } catch (error) {
     console.log(error)   
    }
}