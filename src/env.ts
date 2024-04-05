import "dotenv/config";

export const DATABASE_URL = process.env.DATABASE_URL!;
export const JWT_SECRET = process.env.JWT_SECRET!;

const envVarsAvail = DATABASE_URL && JWT_SECRET;

if (!envVarsAvail) {
  console.error("Error: Missing required variables in .env");
  process.exit();
}
