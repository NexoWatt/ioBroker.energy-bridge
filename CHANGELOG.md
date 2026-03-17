# Changelog

<!--
    Placeholder for the next version (at the beginning of the line):
    ## **WORK IN PROGRESS**
-->

## **WORK IN PROGRESS**

- (nothing yet)

## 0.1.3 (2026-03-16)

- Repository-checker cleanup: Node.js >=20, update `@iobroker/adapter-core`, remove duplicate test deps, add missing translations, add `protectedNative`, update admin dependency, remove deprecated `common.title`.
- Dev tooling: add ESLint config, recommend VS Code JSON schemas, add `@iobroker/adapter-dev`.

## 0.1.2 (2026-03-16)

- Align repository metadata with NPM latest (0.1.2) and add missing `common.news` entry.
- Update README to ioBroker standard format (badges, DE/EN description, changelog + full MIT license).

## 0.1.1 (2026-03-16)

- Fix repository-checker compliance (version sync, `common.news`, README requirements).
- Add `@alcalzone/release-script` (+ ioBroker/license/manual-review plugins) and `.releaseconfig.json` for easier releases.
- Streamline README to a compact English overview (plus short device list).

## 0.1.0 (2026-02-23)

- Initial community release.
- **Community scope:** industrial/utility templates are intentionally excluded (e.g. **TESVOLT**, **SMA Core1/STP125**, **Alpitronic** DC fast chargers, and industrial I/O modules).
- Added CI test workflow (GitHub Actions) and ioBroker unit/integration test scaffolding.
- Stored device configuration (`devicesJson`) as encrypted native configuration and masked passwords in the Admin JSON preview.
