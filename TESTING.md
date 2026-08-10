# Public beta test status — 3.0.2

This document separates automated checks from real end-to-end validation. A green automated suite does not certify compatibility with every Zimbra, Nextcloud, browser, storage or office-server version.

Status legend: **Verified** = manually exercised in the current live test environment; **Partial** = exercised but not across all variants; **Automated only** = covered with local/fake transports; **Not verified** = no reliable end-to-end result yet.

## Environment exercised manually

| Component | Environment | Status |
| --- | --- | --- |
| Zimbra | 10.1.20 GA 4893 on Ubuntu 18.04.6, single mailbox node | Verified |
| Zimbra UI | Modern UI | Verified |
| Browser | Chromium-family browser on Windows | Partial; exact version and other browsers still needed |
| Nextcloud | One live HTTPS installation | Partial; exact version must be recorded in the GitHub compatibility report |
| ONLYOFFICE | One configured live environment | Partial; exact connector/Document Server versions still needed |
| Euro-Office | One configured live environment | Partial; exact connector/Document Server versions still needed |
| Topology | Single Zimbra mailbox node and one active Cloud environment at a time | Verified only for this topology |

Before publishing the beta, record the missing exact versions without publishing hostnames or credentials.

## Functional matrix

| Area | Status | Evidence / remaining work |
| --- | --- | --- |
| Install, on-server Java build, mailboxd restart and Modern deployment | Verified | Repeated upgrades completed; `diagnose.sh` returned `RESULT OK` on Zimbra 10.1.20 |
| Manual Nextcloud app-password login | Verified | Live WebDAV authentication and browsing exercised |
| Nextcloud Login Flow v2 | Automated only | Same-origin validation and flow handling covered; needs live multi-browser test |
| Managed account provisioning | Automated only | OCS creation, app-password exchange, duplicate refusal and rollback use a fake transport; no live managed Nextcloud test |
| Encrypted profile persistence | Verified / automated | AES-GCM, migration and multiple-profile storage covered; persistence across sessions exercised |
| Three simultaneous Nextcloud profiles | Partial | UI/storage tests exist; needs live test with three independent servers/accounts |
| Folder navigation, list/grid, sorting and search | Verified | Live use exercised; advanced filters need more server/version coverage |
| Favorites and smart views | Partial | Capability-gated implementation tested locally; all share types not exercised live |
| Normal upload | Verified | Live upload exercised |
| Chunk/folder upload, cancel/retry and collision choices | Partial | Corrected and covered by build assertions; needs large-file and interrupted-network campaign |
| Create folder and six office formats | Verified / partial | OOXML and OpenDocument creation exercised; all regional locales not opened manually |
| Rename, copy, move and bulk actions | Verified / partial | Core actions exercised; 200-item limits and every collision combination not load-tested |
| Download, ZIP archive and version download | Partial | Basic and corrected version workflows exercised; large ZIP and external-storage variants need testing |
| Trash restore/delete/empty | Partial | DAV parsing automated; every destructive path needs a dedicated disposable live account |
| Public read-only links | Verified | Link creation/insertion exercised; password/expiration and every Nextcloud policy combination need coverage |
| User/group/email/federated/circle shares | Not verified | Capability-gated implementation exists; requires appropriate live server configuration |
| Versions restore | Verified | Live restoration exercised |
| Comments and activity | Not verified | API/parser paths exist; server apps and permissions vary |
| Image/audio/video preview, navigation, move/resize/fullscreen | Verified | Live UI iterations exercised in Chromium |
| Persistent editor/media while navigating Zimbra | Verified | Mail/Calendar navigation exercised without destroying the window |
| ONLYOFFICE editing/co-editing | Verified / partial | Live opening and editing exercised; concurrent multi-user matrix and failure recovery still needed |
| Euro-Office editing/co-editing | Verified / partial | Live opening and editing exercised; version combinations and concurrent matrix still needed |
| Per-profile office provider/settings | Partial | Encryption/config tests exist; three distinct live Document Servers not yet exercised |
| Paperclip → Cloud attachments | Partial | Compose integration exercised through iterative testing; large/multiple-account and all Zimbra limits need more coverage |
| Read-only link insertion in compose | Verified | Official compose insertion path and fallback covered |
| Quota and storage reporting | Verified / automated | Live quota display and read-only scripts exercised |
| Eleven UI/admin languages | Automated only | Key parity and build usage pass; native-speaker review remains required |
| Optional Unsplash backgrounds | Partial | Configuration paths tested; privacy/network policy variants not broadly tested |
| Multi-mailbox shared storage and failover | Not verified | Do not claim support until tested with a suitable shared POSIX filesystem |
| External Nextcloud storage backends | Not verified | SMB/S3/WebDAV/object-store behavior may differ |
| Firefox, Safari and mobile browsers | Not verified | Community reports requested |
| Independent security audit / penetration test | Not performed | Public beta must state this explicitly |

## Automated release suite

`./build-release.sh` currently runs:

- Zimlet frontend build and packaging;
- locale dictionary parity and translation-key usage checks for all eleven locales;
- Modern route, Cloud UI, compose attachment/link and persistent-window assertions;
- runtime tests for image, audio, video and office floating windows;
- installer syntax, safety, version, privacy-choice and backup-location checks;
- Java compilation with local stubs and validation of the on-Zimbra build script;
- Java tests for JSON/XML hardening, path handling, AES-GCM, JWT, profile migration, office settings, account provisioning workflow, localized templates, OCS parsing, WebDAV metadata, versions, trash, search, bulk destinations and request limiting;
- release ZIP creation and SHA-256 generation.

The deployable package has no npm runtime dependency and `npm audit --omit=dev` reports 0 vulnerabilities. The official Zimlet CLI build tool still has known transitive development advisories; they are not shipped, and their status is documented in `SECURITY.md`.

## Minimum beta acceptance test

Use a disposable user and non-critical files:

1. Install, run `./diagnose.sh`, sign in and verify Mail/Calendar still work.
2. Connect with Login Flow and separately with an app password.
3. Browse/search/sort; upload a small file, a folder and a file larger than one chunk.
4. Create all six document formats and edit one file with two concurrent users.
5. Preview image/audio/video, navigate Zimbra, resize/move, then close.
6. Copy/move/rename/select/delete files and restore one from trash.
7. Create a read-only public link and insert it into a message.
8. Attach several Cloud files through Paperclip → Cloud and send to a test recipient.
9. Restore and download a historical version.
10. Run `./diagnose.sh` again and review server logs plus browser console/network errors.

## Criteria before calling the release stable

- At least two supported Zimbra patch levels and two Nextcloud major versions.
- Live Login Flow, managed provisioning and three-profile tests.
- ONLYOFFICE and Euro-Office version matrix with concurrent editing.
- Firefox plus another Chromium platform; mobile behavior documented.
- Multi-hour upload/download and concurrency campaign, including failure recovery.
- Native review of translations or clearly identified community-reviewed locales.
- No unresolved high-severity security findings and a private reporting channel enabled.
- At least several weeks of beta feedback without mailboxd/navigation regressions.
