# บัญชีรายรับ-รายจ่าย — No Auto Refresh + Monthly CRUD + D1

## แก้ไขในชุดนี้
- ยกเลิก refresh อัตโนมัติทั้งหมด
- ไม่มี `setInterval` และไม่มี polling ไปฐานข้อมูลซ้ำ ๆ
- ระบบโหลดฐานข้อมูลเฉพาะตอน Login/เปิดหน้า และเมื่อกดปุ่ม `โหลดข้อมูลล่าสุด` เท่านั้น
- หลังบันทึกจะอัปเดตหน้าปัจจุบันด้วยข้อมูลใน memory และส่งข้อมูลไป D1 โดยไม่ reload หน้า
- รายรับ/รายจ่ายเป็นรายการแยกรายเดือนจริง เพิ่ม/ลบ/แก้ไขได้

## Deploy
```bash
npm install
npx wrangler d1 execute income-expense-dashboard-db --file=./schema.sql --remote
npm run deploy
```

D1 database_id: `4ea2c6ef-d6c6-4b3c-b11f-4ea4eea43f64`
Worker name: `income-expense-tracker`
