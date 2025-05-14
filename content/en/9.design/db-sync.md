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
3. For communicating changes from FiveNet to the gameserver, the NATS websocket system or a custom websocket system could be used (messages would be encoded via Protobuf JSON).
4. A "state" file (like log collectors use to store the "last line") to store the last "ID" (in case of tables without an ID field, it would use, e.g., the `owner` field).
   1. In case of multiple queries, the state is stored per query index number in the config file.

## Limitations

- Only one (main) phone number per char/user.
