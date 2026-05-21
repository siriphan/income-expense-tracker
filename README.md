# Income Expense Dashboard — GitHub + Cloudflare Ready

## Included fixes
- Chart display fixed with `requestAnimationFrame` and explicit chart heights
- Browser auto refresh/polling disabled: no `setInterval`, no auto polling
- Manual refresh only via `โหลดข้อมูลล่าสุด` button
- Monthly income/expense records CRUD
- Cloudflare D1 persistence through `/api/state`
- Worker name: `income-expense-tracker`
- D1 database_id: `4ea2c6ef-d6c6-4b3c-b11f-4ea4eea43f64`

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
git commit -m "Deploy income expense dashboard"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## GitHub Secrets
```text
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
```
