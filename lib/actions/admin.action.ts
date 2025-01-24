import { db } from "@/database/drizzle"
import { shops, users } from "@/database/schema"
import { eq } from "drizzle-orm"

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