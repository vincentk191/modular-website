# Backend Example - Quick Start

This is a minimal example backend to get you started with database integration.

## Quick Setup

### 1. Install Dependencies

```bash
cd backend-example
npm install
```

### 2. Set Up Database

**Option A: SQLite (Easiest)**
- No setup needed! SQLite will create a file automatically.

**Option B: PostgreSQL**
1. Install PostgreSQL or use Docker:
   ```bash
   docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=postgres postgres
   ```
2. Create database:
   ```bash
   createdb portfolio_db
   ```
3. Run schema:
   ```bash
   psql portfolio_db < database/schema.sql
   ```

### 3. Configure Environment

Copy `.env.example` to `.env` and update with your database credentials:

```env
DB_USER=postgres
DB_HOST=localhost
DB_NAME=portfolio_db
DB_PASSWORD=postgres
DB_PORT=5432
PORT=5000
```

### 4. Run Migration (Optional)

If you want to migrate data from your existing `portfolioData.js`:

```bash
node scripts/migrate.js
```

### 5. Start Server

```bash
npm run dev
```

Server will run on `http://localhost:5000`

## Test the API

```bash
# Get all portfolio data
curl http://localhost:5000/api/portfolio

# Get projects only
curl http://localhost:5000/api/portfolio/projects
```

## Next Steps

1. Update your frontend to use this API (see `DATABASE_INTEGRATION.md`)
2. Deploy backend to Render/Railway/Supabase
3. Update frontend environment variables
4. Deploy frontend




