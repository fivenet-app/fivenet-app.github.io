---
title: Database and Installation Troubleshooting
description: Troubleshooting common installation issues related to database configuration and migrations.
---

## Database and Installation Troubleshooting

### 1. Database Migrations Failing Due to Foreign Key Collations Not Matching

This issue occurs when the collation of your database, tables, or columns is inconsistent. To resolve this, ensure that the collation is consistent across all tables. Refer to the [Database Setup](../reference/database-setup) documentation for detailed guidance on checking and updating collations.

### 2. Database DSN Collation Parameter Incorrect

When configuring your database connection string (DSN), ensure that the collation parameter matches the server's collation. For example:

```text
DB_USER:DB_PASS@tcp(DB_HOST:DB_PORT)/DB_NAME?collation=utf8mb4_unicode_ci&loc=Europe%2FBerlin
```

If the server uses a different collation than the DSN, this mismatch can cause issues. Update the DSN to use the collation configured for the database and tables.
