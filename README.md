# บัญชีรายรับ-รายจ่าย Dashboard — Workers + D1 Database

เวอร์ชันนี้บันทึกข้อมูลลงฐานข้อมูล Cloudflare D1 ทำให้เปิดจากเครื่องอื่น/มือถือ/เบราว์เซอร์อื่นแล้วเห็นข้อมูลเดียวกัน

## Login
- User: `admin`
- Password: `siriphan`

## ค่าเริ่มต้นตามเดือนปัจจุบัน
หน้า Dashboard จะเลือกเดือนตามวันที่ของเครื่องผู้ใช้โดยอัตโนมัติ เช่น ถ้าเปิดในเดือนพฤษภาคม ระบบจะเลือก `May` เป็นค่าเริ่มต้น

## สร้าง D1 Database
รันคำสั่งนี้:
```bash
npx wrangler d1 create income-expense-dashboard-db
```
Cloudflare จะแสดง `database_id` ให้คัดลอกไปใส่ใน `wrangler.jsonc` ตรงนี้:
```json
"database_id": "REPLACE_WITH_D1_DATABASE_ID"
```

## สร้างตารางใน D1
หลังแก้ `database_id` แล้วรัน:
```bash
npm install
npx wrangler d1 execute income-expense-dashboard-db --file=./schema.sql --remote
```

## Deploy บนเครื่องตัวเอง
```bash
npm install
npx wrangler login
npm run deploy
```

## Upload ขึ้น GitHub
```bash
git init
git add .
git commit -m "Add D1 database dashboard"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## Deploy ผ่าน GitHub Actions
เพิ่ม GitHub Secrets:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

จากนั้น push เข้า branch `main`

## โครงสร้างไฟล์
```text
public/
  index.html
  gxHo.html
  _headers
src/
  worker.js
schema.sql
wrangler.jsonc
package.json
.github/workflows/deploy-cloudflare-workers.yml
README.md
```

## หมายเหตุ
- ไฟล์ static อยู่ใน `public/` เท่านั้น เพื่อป้องกันปัญหา upload `node_modules` ขนาดใหญ่
- API `/api/state` ใช้ D1 binding ชื่อ `DB`
- ข้อมูลทั้งหมดถูกเก็บเป็น JSON หนึ่ง record ในตาราง `dashboard_state`
