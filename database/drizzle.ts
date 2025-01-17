import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';

export const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle("postgresql://neondb_owner:BZsrVw87CAGT@ep-shiny-pond-a9dxtafb.gwc.azure.neon.tech/neondb?sslmode=require");
