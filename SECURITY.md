# Security policy

Please do not disclose a suspected vulnerability in a public issue before a fix is available. Contact the maintainer privately through the security contact configured on the public repository.

Include the affected version, impact, reproduction steps and a minimal sanitized trace. Never send production passwords, app passwords, JWT secrets, cookies, authorization headers or encrypted profile files.

Supported release: the latest published stable version. Administrators should use HTTPS, JWT for every global or per-profile office provider, a dedicated least-privilege Nextcloud service account in managed mode, and Nextcloud app passwords. Per-profile office secrets are stored inside the AES-GCM encrypted profile and are never returned by the profile API. Public links created by this Zimlet are read-only by default.

Version 3 adds Nextcloud Login Flow v2, strict same-origin validation for its login and polling endpoints, verified remote app-password revocation, bounded JSON/XML/binary responses, request throttling and inter-process locks around encrypted profile writes. The manual credential form remains available for compatibility; prefer Login Flow or a dedicated app password over a primary account password.

Remote photo backgrounds are disabled by default (`ui.remote_backgrounds=false`). Enabling them causes the browser to contact Unsplash and should therefore be an explicit privacy decision. Normal browsing, previews and chunk uploads are streamed or proxied and are not retained as a Cloud cache on Zimbra. Files deliberately attached to an email are copied into Zimbra and count against the mailbox/message limits.

For multiple mailbox nodes, use storage that provides reliable POSIX-style atomic moves and file locks, mount it at the same path on every node, then set `storage.shared=true`. Test failover before production. The flag documents the topology; it cannot make an unsuitable network filesystem safe.

## Build-tool advisory status

The release archive contains no `node_modules` directory and has no npm runtime dependency. `npm audit --omit=dev` is therefore clean for the deployable product. Building the Modern UI does, however, use the official `@zimbra/zimlet-cli` development tool. At the time of the 3.0.2 release, npm reports unresolved advisories in several of that tool's transitive build/development dependencies, even with the latest stable CLI version pinned by this project. These packages do not execute inside Zimbra after installation, but contributors should build in an isolated disposable environment, process only trusted project inputs, avoid exposing the development server, and track the upstream CLI for security updates. Do not use `npm audit fix --force` without a complete rebuild and compatibility test.
