import { config } from "dotenv";
config();

const toNumber = (value: string | undefined, fallback: number): number => {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
};

const requireEnv = (name: string, fallback?: string): string => {
  const value = process.env[name] ?? fallback;
  if (!value) {
    throw new Error(`${name} is required in environment variables`);
  }
  return value;
};

export default {
    PORT: toNumber(process.env.PORT, 3000),
    DB_URL: requireEnv('DB_URL'),
    DB_SYNCHRONIZE: process.env.DB_SYNCHRONIZE === 'true',
    JWT_SECRET: requireEnv('JWT_SECRET', 'change_me_in_production'),
    JWT_EXPIRES_IN: toNumber(process.env.JWT_EXPIRES_IN, 60 * 60 * 24),
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD
};
