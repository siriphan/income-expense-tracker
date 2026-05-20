# บัญชีรายรับ-รายจ่าย Dashboard — GitHub + Cloudflare Workers

โปรเจกต์นี้พร้อมสำหรับอัปโหลดขึ้น GitHub และ Deploy เป็น Cloudflare Workers Static Assets

## Login
- User: `admin`
- Password: `siriphan`

## โครงสร้างไฟล์
```text
public/
  index.html
  gxHo.html
  _headers
wrangler.jsonc
package.json
.gitignore
.github/workflows/deploy-cloudflare-workers.yml
README.md
```

## สำคัญ: แก้ปัญหา Asset too large
โปรเจกต์นี้ตั้งค่า Workers assets เป็น:
```json
"assets": {
  "directory": "./public"
}
```
ดังนั้น Wrangler จะ upload เฉพาะไฟล์ใน `public/` และจะไม่เผลอ upload `node_modules/workerd` เหมือน error เดิม

## Deploy บนเครื่องตัวเอง
ติดตั้ง Node.js แล้วรัน:
```bash
npm install
npx wrangler login
npm run deploy
```

## Upload ขึ้น GitHub
```bash
git init
git add .
git commit -m "Deploy income expense dashboard to Cloudflare Workers"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## Deploy อัตโนมัติผ่าน GitHub Actions
สร้าง GitHub Repository Secrets:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

จากนั้น push เข้า branch `main` ระบบจะ deploy ด้วย workflow:
```text
.github/workflows/deploy-cloudflare-workers.yml
```

## Cloudflare API Token permissions แนะนำ
ใช้ Custom token ที่มีสิทธิ์อย่างน้อย:
- Account > Workers Scripts > Edit
- Account > Workers Routes > Edit ถ้ามี route
- Account > Account Settings > Read

ถ้าใช้ Workers Static Assets บน account เดียวกัน ให้ตรวจว่า token อยู่ใน account ID ที่ถูกต้อง

## แก้ชื่อ Worker
แก้ในไฟล์ `wrangler.jsonc`:
```json
"name": "income-expense-dashboard"
```
