"use server"
import { db } from "@/database/drizzle"
import { bookings, shops, users } from "@/database/schema"
import { and, eq } from "drizzle-orm"

export const registerShop = async({adminId, shopName , shopAddress , shopPhone , shopEmail , shopDescription , shopImages}:OnBoardingCredentials)=>{
    try {
        //@ts-ignore
        const addShop = await db.insert(shops).values({
            adminId,
            shopName,
            shopAddress,
            shopPhone,
            shopEmail,
            shopDescription,
            shopImages
        })
        await db.update(users).set({onBoarded: true}).where(eq(users.id , adminId))
        return {success:true}
    } catch (error) {
        return {success:false , error:"Error While ONBoardingCredentials"}
    }
}

export const getShopById = async(userId: string)=>{
    try {
        const shop = await db.select().from(shops).where(eq(shops.adminId , userId)).limit(1)
        return shop[0]
    } catch (error) {
        console.log(error)
    }
}
export const getShopId = async (adminId: string)=>{
    try {
        const shopId = await db.select().from(shops).where(eq(shops.adminId , adminId)).limit(1);
        return shopId[0].id
    } catch (error) {
        console.log(error)
    }
}
export const getBookingByShopId = async(shopId : string)=>{
    try {
        const booking = await db.select().from(bookings).where(eq(bookings.shopId , shopId)).orderBy(bookings.bookingStatus );
        return booking
    } catch (error) {
        console.log(error)
    }
}
export const pendingBooking = async (shopid: string) => {
    let count: number = 0;
    try {
        // Fetch all pending bookings for the given shopId
        const result = await db.select().from(bookings)
            .where(and(eq(bookings.shopId, shopid), eq(bookings.bookingStatus, 'PENDING')));

        // The count of pending bookings is just the length of the result array
        count = result.length;

        return count;
    } catch (error) {
        console.log(error);
        return count; // In case of error, return 0 count
    }

}
export const confirmedBooking = async (shopid: string) => {
    let count: number = 0;
    try {
        // Fetch all pending bookings for the given shopId
        const result = await db.select().from(bookings)
            .where(and(eq(bookings.shopId, shopid), eq(bookings.bookingStatus, 'BOOKED')));

        // The count of pending bookings is just the length of the result array
        count = result.length;

        return count;
    } catch (error) {
        console.log(error);
        return count; // In case of error, return 0 count
    }

}
export const cancelledBooking = async (shopid: string) => {
    let count: number = 0;
    try {
        // Fetch all pending bookings for the given shopId
        const result = await db.select().from(bookings)
            .where(and(eq(bookings.shopId, shopid), eq(bookings.bookingStatus, 'CANCLED')));

        // The count of pending bookings is just the length of the result array
        count = result.length;

        return count;
    } catch (error) {
        console.log(error);
        return count; // In case of error, return 0 count
    }

}
export const sheduleBookings  = async(bookingId : string)=>{
try {
    const result = await db.update(bookings).set({bookingStatus:'BOOKED'}).where(eq(bookings.id , bookingId));
    return {success :true}
} catch (error) {
console.log(error);
return    {success : false}
}
}