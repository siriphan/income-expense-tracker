# บัญชีรายรับ-รายจ่าย Dashboard — D1 Ready

Database ID ใส่ให้แล้ว:

```text
4ea2c6ef-d6c6-4b3c-b11f-4ea4eea43f64
```

## Deploy

```bash
npm install
npx wrangler d1 execute income-expense-dashboard-db --file=./schema.sql --remote
npm run deploy
```

## Upload GitHub

```bash
git init
git add .
git commit -m "Deploy dashboard with D1 database"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## GitHub Secrets

```text
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
```

## Login
- User: admin
- Password: siriphan

## Features
- บันทึกข้อมูลลง Cloudflare D1 ผ่าน `/api/state`
- เปิดได้ทุกที่และใช้ข้อมูลเดียวกัน
- ค่าเริ่มต้นแสดงเดือนปัจจุบันอัตโนมัติ
