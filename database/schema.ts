import { integer, text, boolean, pgTable, uuid  , varchar, pgEnum, date, timestamp} from "drizzle-orm/pg-core";
export  const ROLE_ENUM = pgEnum('' ,['CUSTOMER' , 'ADMIN']);
export const users = pgTable("users", {
  id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
  fullName: varchar("full_name" , {length:255}).notNull(),
  email:text("email").notNull().unique(),
  phone:varchar("phone_number").notNull(),
  password:text("passowrd").notNull(),

 
  isAdmin: ROLE_ENUM('isAdmin').default('CUSTOMER'),
 
  createdAt: timestamp('created_at' , {
    withTimezone:true
  }).defaultNow(),
  
});