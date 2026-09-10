---
title: Datenbank- und Installationsfehlerbehebung
description: Fehlerbehebung bei häufigen Installationsproblemen im Zusammenhang mit Datenbankkonfiguration und Migrationen.
---

## Datenbank- und Installationsfehlerbehebung

### 1. Datenbankmigrationen schlagen aufgrund nicht übereinstimmender Fremdschlüssel-Kollationen fehl

Dieses Problem tritt auf, wenn die Kollation Ihrer Datenbank, Tabellen oder Spalten inkonsistent ist. Um dies zu beheben, stellen Sie sicher, dass die Kollation über alle Tabellen hinweg konsistent ist. Weitere Informationen finden Sie in der Dokumentation zur [Datenbankeinrichtung](/de/getting-started/reference/database-setup).

### 2. Falscher Kollationsparameter in der Datenbank-DSN

Wenn Sie Ihre Datenbank-Verbindungszeichenfolge (DSN) konfigurieren, stellen Sie sicher, dass der Kollationsparameter mit der Kollation des Servers übereinstimmt. Beispiel:

```text
DB_USER:DB_PASS@tcp(DB_HOST:DB_PORT)/DB_NAME?collation=utf8mb4_unicode_ci&loc=Europe%2FBerlin
```

Wenn der Server eine andere Kollation als die DSN verwendet, kann diese Diskrepanz Probleme verursachen. Aktualisieren Sie die DSN, damit sie der für Datenbank und Tabellen konfigurierten Kollation entspricht.
