# Fix Cloudflare Workers Deploy

จาก log ล่าสุด Cloudflare Workers Builds expected worker name เป็น:

```text
income-expense-tracker
```

ดังนั้น `wrangler.jsonc` ต้องใช้ชื่อเดียวกัน:

```json
"name": "income-expense-tracker"
```

และ D1 binding ต้องมี `database_id` นี้:

```text
4ea2c6ef-d6c6-4b3c-b11f-4ea4eea43f64
```

## วิธีใช้

1. เปิด repo ใน GitHub
2. แทนที่ไฟล์ `wrangler.jsonc` เดิมด้วยไฟล์ `wrangler.jsonc` ใน ZIP นี้
3. Commit / Push ใหม่

หรือแก้เองให้เป็น:

```json
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "income-expense-tracker",
  "main": "src/worker.js",
  "compatibility_date": "2026-05-20",
  "assets": {
    "binding": "ASSETS",
    "directory": "./public"
  },
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "income-expense-dashboard-db",
      "database_id": "4ea2c6ef-d6c6-4b3c-b11f-4ea4eea43f64"
    }
  ],
  "observability": {
    "enabled": true
  }
}
```

## ถ้ายังขึ้น database_id invalid
ให้ตรวจว่า D1 Database นี้อยู่ใน Account เดียวกับ Worker:

```bash
npx wrangler d1 list
npx wrangler d1 info income-expense-dashboard-db
```

ถ้า ID ที่ Cloudflare แสดงไม่ตรงกับ `4ea2c6ef-d6c6-4b3c-b11f-4ea4eea43f64` ให้คัดลอก ID จริงจากคำสั่ง `d1 list` ไปใส่ใน `wrangler.jsonc`

## สร้างตาราง D1

```bash
npx wrangler d1 execute income-expense-dashboard-db --file=./schema.sql --remote
```

## Deploy

```bash
npm run deploy
```
