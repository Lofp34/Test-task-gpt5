import { getDatabaseVersion } from '../lib/db.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const version = await getDatabaseVersion();
    return res.status(200).json({ ok: true, version });
  } catch (error) {
    console.error('Healthcheck failed', error);
    return res.status(500).json({ ok: false, message: error.message });
  }
}
