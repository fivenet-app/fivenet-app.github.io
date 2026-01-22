---
title: Improving Data Separation and Management for Users and Citizens
---

**Status**: Draft

## Glossary

- User - An user account that can log into FiveNet.
- Citizen - A roleplay character that is optionally linked to an user account (e.g., might be "unlinked" if an user doesn't create a FiveNet account).

## Problems

- Some servers that might have expanded the ESX framework or are even using a different framework, might have different ways to assign one **or more** groups to an user. This is currently not really supported.
    - In case of ESX an user can only have one group assigned via the `users` table `group` column. This also binds the permissions to the char itself and not to the whole "account."
- This continues for some other (common) data, e.g., jobs, phone numbers.
    - Some chars might have more than one job, e.g., ModernV, people can have what you can call a "primary" job and a "secondary" job (technically even more), that are simply set in the `users` .
    - Multiple phone numbers are also not supported, as ESX only supports one phone number per char which the current `fivenet_user` table is based on. There seems to be some phone plugins that allow multiple phone numbers.
- Sidenote: Being able to give an user superuser access or even allowing permissions to be given to users of a job and/or "globally."

## Goals

- Citizens - Info/Data Changes
    - Multiple Groups - Allowing multiple groups to be assigned to a citizen via DBSync from gameserver db and/or admin UI.
    - Multiple Jobs - Allow multiple jobs to be assigned to a citizen via DBSync from gameserver db and/or admin UI.
        - A clear distinction between primary and secondary jobs is needed.
    - Multiple Phone Numbers - Allow multiple phone numbers to be assigned to a citizen.
        - A clear distinction between primary and secondary phone numbers is needed.
- Creating/Editing/Deleting Citizens
    - Creating a citizen with incomplete or all information should be possible manually via the admin UI
        - Could be made accessible via permissions in the future for, e.g., hardcore roleplay servers that have staff manually "adding" new users via an airport.
        - Ability to set citizen information based on permission levels.
    - Ability to edit "citizens" in the FiveNet database (preferably with a way to reset back to "original" (from gameserver) state).
    - Ability to delete "citizens" from the FiveNet database (without "deleting" them from the gameserver database).
- Improve performance of account to citizens lookup by not having to use `WHERE `identifier` LIKE '%_IDENTIFIER_HERE_'` queries.
    - An `user` entry will be linked to the account ID directly instead of having to search for it via the identifier pattern matching.

## Solutions

- Changing the `fivenet_user` table structure.
    - Adding a `deleted_at` column to be able to soft-delete users, with a `deleted_reason` field.
    - The current "singular" columns (`group`, `job`, and `phone_number`) will be kept as they are, a prefix of `active_` or `primary_` might be added to clarify their purpose.
    - Adding new (plural named) columns for `groups`, `jobs`, and `phone_numbers` that are of type `JSON` or `LONGTEXT` (required for compatibility with MariaDB).
        - Or even seperate tables for each of them, e.g., `fivenet_user_groups`, `fivenet_user_jobs`, `fivenet_user_phone_numbers`.
            - These tables would have a foreign key to the `fivenet_user` table and store multiple entries per user.
- Updating the FiveNet admin UI to support the new functionalities.
    - Adding interfaces for managing multiple groups, jobs, and phone numbers.
    - Adding interfaces for creating, editing, and deleting "citizens."
