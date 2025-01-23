
import {  text,  pgTable, uuid  , varchar, pgEnum,  boolean  ,timestamp} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
  fullName: varchar("full_name" , {length:255}).notNull(),
  email:text("email").notNull().unique(),
  phone:varchar("phone_number").notNull(),
  password:text("passowrd").notNull(),
  isAdmins: boolean().default(false).notNull(),
  onBoarded: boolean().default(false).notNull(),
  createdAt: timestamp('created_at' , {
    withTimezone:true
  }).defaultNow(),
  
});
export const shops = pgTable("admin_shops" , {
  id:uuid('id').notNull().primaryKey().defaultRandom().unique(),
  adminId:varchar("admin_id").notNull(),
  shopName:varchar("shop_name").notNull().default(""),
  shopAddress:varchar("shop_address").notNull().default(""),
  shopDescription:text("shop_description").default(""),
  shopPhone:varchar("shop_phone").default(""),
  shopEmail:text("shop_email").default(""),
  shopImageUrl:varchar("shop_image_url").default(""),
  opened:boolean().default(true).notNull()
})
