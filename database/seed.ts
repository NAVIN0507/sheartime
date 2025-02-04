import {neon} from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import dummyshops from "../dummyshops.json"
import { shops } from "./schema";
const sql = neon("postgresql://neondb_owner:dEpzrD3Jx7av@ep-lively-fire-a2dlo1ba.eu-central-1.aws.neon.tech/neondb?sslmode=require")
export const db = drizzle({client:sql});

const seed = async()=>{
  try {
      console.log("Seeding....")
    for(const shop of dummyshops){
        //@ts-ignore
        await db.insert(shops).values({
            ...shop
        })
        console.log("Seeding Completed")
    }
  } catch (error) {
    console.log(error);
  }
}

seed();