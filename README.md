# บัญชีรายรับ-รายจ่าย — Monthly Records CRUD + D1

## แก้ไขตามคำขอ
- รายการรายรับและรายจ่ายเป็น record แยกตามเดือนจริง
- เพิ่ม / ลบ / แก้ไข ได้ทีละรายการ
- ตารางแสดงรายการของเดือนที่เลือกเท่านั้น ถ้าเลือก All จะแสดงทั้งปี
- Modal มีช่องเลือกเดือนของรายการ
- Delete จะลบเฉพาะรายการนั้น ไม่กระทบรายการเดือนอื่น
- ใช้ Cloudflare D1 database_id: `4ea2c6ef-d6c6-4b3c-b11f-4ea4eea43f64`
- Worker name: `income-expense-tracker`

## Deploy
```bash
npm install
npx wrangler d1 execute income-expense-dashboard-db --file=./schema.sql --remote
npm run deploy
```
