# @scuton/license-gen

Generate LICENSE files from your terminal. Supports MIT, Apache-2.0, GPL-3.0, BSD, ISC, and more.

## Install

```bash
npm install -g @scuton/license-gen
```

## CLI Usage

```bash
# Generate MIT license (auto-detect author from git)
npx @scuton/license-gen mit

# Specify author and year
npx @scuton/license-gen apache-2.0 --author "John Doe" --year 2026

# List all available licenses
npx @scuton/license-gen --list

# Custom output path
npx @scuton/license-gen mit --output ./docs/LICENSE
```

## Programmatic API

```typescript
import { generateLicense, listLicenses } from '@scuton/license-gen';

// Generate license text
const text = generateLicense({
  license: 'mit',
  author: 'John Doe',
  year: '2026',
});

// List available licenses
const licenses = listLicenses();
// ['mit', 'apache-2.0', 'gpl-3.0', 'bsd-2-clause', 'bsd-3-clause', 'isc', 'unlicense', 'mpl-2.0']
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

## License

MIT © Scuton Technology
