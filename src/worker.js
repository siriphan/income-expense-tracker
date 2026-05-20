export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/state") {
      return handleState(request, env);
    }
    return env.ASSETS.fetch(request);
  }
};

async function ensureSchema(env) {
  await env.DB.prepare(`
    CREATE TABLE IF NOT EXISTS dashboard_state (
      id TEXT PRIMARY KEY,
      json TEXT NOT NULL,
      updated_at TEXT NOT NULL
    )
  `).run();
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}

async function handleState(request, env) {
  if (!env.DB) {
    return json({ error: "D1 binding DB is missing. Check wrangler.jsonc d1_databases." }, 500);
  }
  await ensureSchema(env);
  if (request.method === "GET") {
    const row = await env.DB.prepare("SELECT json FROM dashboard_state WHERE id = ?")
      .bind("main")
      .first();
    if (!row) return json({ data: null, monthly: null, source: "empty" });
    return json(JSON.parse(row.json));
  }
  if (request.method === "POST") {
    const body = await request.json();
    const payload = JSON.stringify({ data: body.data || null, monthly: body.monthly || null });
    await env.DB.prepare(`
      INSERT INTO dashboard_state (id, json, updated_at)
      VALUES (?, ?, datetime('now'))
      ON CONFLICT(id) DO UPDATE SET json = excluded.json, updated_at = excluded.updated_at
    `).bind("main", payload).run();
    return json({ ok: true });
  }
  return json({ error: "Method not allowed" }, 405);
}
