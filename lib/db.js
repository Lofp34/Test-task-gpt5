import { neon } from '@neondatabase/serverless';

const connectionString = process.env.NEON_DATABASE_URL;

export function getClient() {
  if (!connectionString) {
    throw new Error('NEON_DATABASE_URL is not set');
  }
  return neon(connectionString);
}

export async function getDatabaseVersion() {
  const sql = getClient();
  const [{ version }] = await sql`SELECT version()`;
  return version;
}
