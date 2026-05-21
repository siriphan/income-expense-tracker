# Income Expense Dashboard — Numeric Summary + Export Fixed + Cloudflare Ready

## Included changes
- Export รูปภาพแสดงข้อมูลจริงแล้ว: สรุปยอด + รายการรายรับ/รายจ่ายในเดือนที่เลือก
- เพิ่มปุ่ม `แสดงผลบนมือถือแนวตั้ง`
- ยกเลิกกราฟวงกลมรายจ่าย เปลี่ยนเป็นตัวเลข Pending / Completed
- `ยอดรายรับ` เปลี่ยนเป็น `รายรับทั้งปี` และแสดงเป็นตัวเลข
- `สัดส่วนรายรับ` ยกเลิกกราฟวงกลม และแสดงเป็นตัวเลข/เปอร์เซ็นต์
- ไม่มี auto refresh/polling
- D1 database_id: `4ea2c6ef-d6c6-4b3c-b11f-4ea4eea43f64`
- Worker name: `income-expense-tracker`

## Deploy
```bash
npm install
npx wrangler d1 execute income-expense-dashboard-db --file=./schema.sql --remote
npm run deploy
```

## GitHub upload
```bash
git init
git add .
git commit -m "Deploy income expense dashboard numeric version"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```
