---
title: DB Sync
---

# DB Sync

## Goal

- Multi-Framework compatibility - "Abstracting" the framework's tables away via a separate sync process with handles/merges the data as needed into FiveNet compatible table structure.

## Idea

1. Sync process that takes care of reading and transforming the data.
   1. Cleanup of deleted, e.g., users, vehicles, etc., should be handled as well.
2. Config presets for common frameworks (e.g., ESX, QB)
