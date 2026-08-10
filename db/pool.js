import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
import path from "node:path";

dotenv.config({ path: path.join(import.meta.dirname, "../.env") });

export const sql = neon(process.env.DATABASE_URL);