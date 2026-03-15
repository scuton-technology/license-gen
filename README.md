<div align="center">

# license-gen

**Generate LICENSE files from your terminal. MIT, Apache, GPL, and more.**

[![npm](https://img.shields.io/npm/v/@scuton/license-gen?style=flat-square)](https://www.npmjs.com/package/@scuton/license-gen)
[![License: MIT](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square)](https://www.typescriptlang.org/)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen?style=flat-square)](package.json)

</div>

---

## Install

```bash
npm install @scuton/license-gen
```

## CLI Usage

```bash
npx @scuton/license-gen mit
npx @scuton/license-gen apache-2.0 --author "John Doe" --year 2026
npx @scuton/license-gen --list
npx @scuton/license-gen mit --output ./docs/LICENSE
```

## Supported Licenses

| ID | Name |
|---|---|
| `mit` | MIT License |
| `apache-2.0` | Apache License 2.0 |
| `gpl-3.0` | GNU GPL v3 |
| `bsd-2-clause` | BSD 2-Clause |
| `bsd-3-clause` | BSD 3-Clause |
| `isc` | ISC License |
| `unlicense` | The Unlicense |
| `mpl-2.0` | Mozilla Public License 2.0 |

## Programmatic API

```typescript
import { generateLicense, listLicenses } from '@scuton/license-gen';

const text = generateLicense({ license: 'mit', author: 'John Doe', year: '2026' });
const all = listLicenses(); // ['mit', 'apache-2.0', ...]
```

## License

MIT — [Scuton Technology](https://scuton.com)
