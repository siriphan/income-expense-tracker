# บัญชีรายรับ-รายจ่าย Dashboard — Layout Fixed + Monthly Edit + D1

## แก้ไขในชุดนี้
- แก้ layout ให้กลับมาเป็น 2 section แนวตั้ง: รายรับด้านบน / รายจ่ายด้านล่าง
- ในแต่ละ section แยกเป็น ตาราง / การ์ด / กราฟ อย่างสมดุล ไม่บีบกราฟไปด้านขวา
- ปุ่มแก้ไข ✏️ จะแสดงยอดของเดือนที่เลือกจริง เช่น Dec จะแสดงยอด Dec เท่านั้น
- ถ้าเลือก All แล้วแก้ไข ระบบจะหารเฉลี่ย 12 เดือน
- ใช้ Cloudflare D1 database_id: `4ea2c6ef-d6c6-4b3c-b11f-4ea4eea43f64`
- Worker name: `income-expense-tracker`

## Deploy
```bash
npm install
npx wrangler d1 execute income-expense-dashboard-db --file=./schema.sql --remote
npm run deploy
```
