---
title: Häufige Installationsprobleme
beschreibung: Fehlerbehebung bei häufigen Installationsproblemen im Zusammenhang mit Datenbankkonfiguration und Migrationen.
---

## Häufige Installationsprobleme

### 1. Datenbankmigrationen schlagen aufgrund nicht übereinstimmender Fremdschlüssel-Kollationen fehl

Dieses Problem tritt auf, wenn die Kollation Ihrer Datenbank, Tabellen oder Spalten inkonsistent ist. Um dies zu beheben, stellen Sie sicher, dass die Kollation über alle Tabellen hinweg konsistent ist. Weitere Informationen finden Sie in der Dokumentation zu den [Datenbankgrundlagen](./6.database-basics.md).

### 2. Falscher Kollationsparameter in der Datenbank-DSN

Wenn Sie Ihre Datenbank-Verbindungszeichenfolge (DSN) konfigurieren, stellen Sie sicher, dass der Kollationsparameter mit der Kollation des Servers übereinstimmt. Beispiel:

```text
DB_USER:DB_PASS@tcp(DB_HOST:DB_PORT)/DB_NAME?collation=utf8mb4_general_ci&loc=Europe%2FBerlin
```

Wenn der Server `utf8mb4_general_ci` verwendet, Ihre DSN jedoch `utf8mb4_unicode_ci` angibt, kann diese Diskrepanz Probleme verursachen. Aktualisieren Sie die DSN, um den richtigen Kollationsparameter zu verwenden.
