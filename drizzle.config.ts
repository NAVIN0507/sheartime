import {config} from 'dotenv'
import {defineConfig} from 'drizzle-kit'
config({ path: '.env.local' });
export default defineConfig({
    out:'./migrations',
    schema:'./database/schema.ts',
    dialect:'postgresql',
    dbCredentials:{
        url:process.env.DATABASE_URL!,
    }
})