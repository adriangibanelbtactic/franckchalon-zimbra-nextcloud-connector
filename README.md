# zimbra-nextcloud-connector

This Zimlet integrates Nextcloud directly into the Zimbra Modern UI, providing file browsing, uploads, media previews, public read-only links, trash management, and collaborative document editing. It supports both ONLYOFFICE and Euro-Office through their respective Nextcloud connectors.

Created and maintained by **Franck Chalon** as an independent community project.

Version 3.0.2 is a corrective stability release. It supports French (default), US English, Spanish (Spain and Argentina), Italian, German, Portuguese (Portugal and Brazil), Hindi (India), Malay (Malaysia) and Russian (Russia). Administrative scripts use the configured language; the Modern UI follows each Zimbra user's locale and falls back to French.

## Highlights in 3.0.2

- chunk uploads no longer stop after their first block because of a frontend translation error;
- historical versions are downloaded from the exact WebDAV resource returned by Nextcloud and restored through Nextcloud's `restore/target` DAV endpoint;
- both `install.sh` and `configure.sh` explicitly ask whether remote Unsplash backgrounds may be enabled; unattended installs can set `CLOUD_UNSPLASH=true|false`;
- read-only Nextcloud links are inserted through Zimbra's official `insertAtCaret` compose API, with a visible manual-copy fallback instead of a focus-dependent Clipboard call;
- the installer now explicitly offers optional Unsplash backgrounds while keeping the privacy-first local gradient as the default;
- managed-account integration tests cover OCS user creation, app-password exchange, WebDAV verification, encrypted persistence, duplicate protection and rollback deletion.

- capability-aware interface and WebDAV permission/lock enforcement, so unavailable or forbidden actions are hidden or disabled;
- smart views for favorites, recent files, shares and public links, plus advanced account/folder search;
- resumable-style Nextcloud chunk uploads with folder drag-and-drop, progress, cancel, retry and explicit collision policies;
- ZIP downloads for folders and same-folder selections, without caching Cloud files in Zimbra;
- an enriched details workspace for ownership, tags, checksums, permissions, shares, versions, comments and activity when supported by the connected server;
- secure Nextcloud Login Flow v2, with manual app-password sign-in retained as a fallback;
- a richer **Paperclip → Cloud** picker with account switching, favorites, recent files, global search, Zimbra-derived attachment limits and read-only link insertion;
- optional administrator-provided document templates, payload pagination, per-account/global request limits and cross-process locks for shared profile storage;
- built-in user diagnostics plus read-only administrator diagnostic and profile-lifecycle scripts;
- privacy-first visuals: polished local gradients by default, while remote Unsplash backgrounds are disabled unless the administrator explicitly enables them.

Office and media windows remain persistent, movable and resizable below Zimbra's navigation. Up to three encrypted Nextcloud profiles and per-profile ONLYOFFICE/Euro-Office settings are preserved across upgrades. New documents support `.docx`, `.xlsx`, `.pptx`, `.odt`, `.ods` and `.odp`, including regional document locales. Collabora is intentionally not included in this release.

The package has local automated coverage for Java compilation, security-sensitive parsers, translations, installer safety, frontend integration and persistent windows. A real staging deployment matching the target Zimbra, Nextcloud and office-server versions is still required before production rollout or community publication.

## Nextcloud account modes

- `manual`: every Zimbra user connects any compatible Nextcloud account with its URL, username and preferably an app password.
- `managed`: an administrator configures one Nextcloud server and service account. On first use, Cloud provisions a personal Nextcloud account whose username is the complete Zimbra email address. The initial random password is displayed once; only a separate encrypted app password is retained by the Zimlet.

## Office providers

The installer supports ONLYOFFICE or Euro-Office, with JWT recommended and an unsigned mode limited to isolated testing. A user may override those settings per Cloud account from the Zimlet. The corresponding Nextcloud office app must be configured by its administrator with exactly the same provider, Document Server URL and JWT secret; the Zimlet cannot remotely change Nextcloud administrator settings. Editing requests the official configuration from that app, so users join the same collaborative session only when their openings use the same Document Server and document session.

## Installation

Run on the Zimbra mailbox server as root:

```bash
cd /tmp
unzip zimbra-nextcloud-connector-v3.0.2.zip
cd zimbra-nextcloud-connector-3.0.2
./install.sh
```

The installer builds the Java extension against the exact Zimbra libraries, restarts mailboxd once, verifies the extension version, then deploys the Modern Zimlet. Existing encrypted user profiles and configuration are preserved during upgrades.

After installation, `./diagnose.sh` performs a read-only operational check and `./lifecycle-report.sh` identifies encrypted profiles that may belong to removed Zimbra accounts. Neither command prints stored secrets. Advanced options such as custom templates, shared storage and remote backgrounds are documented in [README_FR.md](README_FR.md) and remain conservative by default.

Verify the server extension:

```bash
curl -sS http://127.0.0.1:8080/service/extension/nextcloud-connector/public/ping
```

Expected result:

```json
{"status":"ok","version":"3.0.2"}
```

For complete security, network, account-mode, troubleshooting and recovery instructions, see [README_FR.md](README_FR.md). Contributions and translation corrections are welcome; see [CONTRIBUTING.md](CONTRIBUTING.md).

## Publishing checklist

Use a public GitHub repository as the source of truth. Publish the source, BSD-3-Clause license, tagged release, release ZIP and `SHA256SUMS`; never publish a real `nextcloud-zimlet.properties` file or credentials. The Zeta Alliance gallery and Zimbra Community forum can then link to the GitHub release. Keep unreleased builds clearly marked and use the issue tracker for compatibility reports.

## AI assistance

This project was designed and developed with the assistance of artificial intelligence tools.

AI was used to help with code generation, debugging, documentation, translations and project structuring. The final implementation, testing, configuration and publication were performed and validated by the project maintainer.

## License

BSD-3-Clause. Copyright 2026 Franck Chalon.
