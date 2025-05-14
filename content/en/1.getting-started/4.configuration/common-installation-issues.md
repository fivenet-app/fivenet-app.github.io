---
title: Common Installation Issues
description: Troubleshooting common installation issues related to database configuration and migrations.
---

## Common Installation Issues

### 1. Database Migrations Failing Due to Foreign Key Collations Not Matching

This issue occurs when the collation of your database, tables, or columns is inconsistent. To resolve this, ensure that the collation is consistent across all tables. Refer to the [Database Basics](./6.database-basics.md) documentation for detailed guidance on checking and updating collations.

### 2. Database DSN Collation Parameter Incorrect

When configuring your database connection string (DSN), ensure that the collation parameter matches the server's collation. For example:

```text
DB_USER:DB_PASS@tcp(DB_HOST:DB_PORT)/DB_NAME?collation=utf8mb4_general_ci&loc=Europe%2FBerlin
```

If the server uses `utf8mb4_general_ci`, but your DSN specifies `utf8mb4_unicode_ci`, this mismatch can cause issues. Update the DSN to use the correct collation parameter.
