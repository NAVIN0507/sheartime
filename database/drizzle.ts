import {neon} from "@neondatabase/serverless"
import {drizzle} from 'drizzle-orm/neon-http'

const sql = neon("postgresql://neondb_owner:dEpzrD3Jx7av@ep-lively-fire-a2dlo1ba.eu-central-1.aws.neon.tech/neondb?sslmode=require")
export const db = drizzle({client:sql});