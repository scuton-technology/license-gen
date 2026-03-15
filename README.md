<div align="center">
  <br>
  <h1>license-gen</h1>
  <p><strong>Generate LICENSE files from your terminal</strong></p>
  <br>
  <p>
    <a href="https://www.npmjs.com/package/@scuton/license-gen"><img src="https://img.shields.io/npm/v/@scuton/license-gen?color=2563eb&label=npm" alt="npm"></a>
    <a href="https://www.npmjs.com/package/@scuton/license-gen"><img src="https://img.shields.io/npm/dm/@scuton/license-gen?color=gray&label=downloads" alt="downloads"></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-green" alt="license"></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/types-TypeScript-3178c6" alt="typescript"></a>
  </p>
  <br>
</div>

> Generate LICENSE files from your terminal. MIT, Apache, GPL, BSD, ISC, and more.

## Highlights

- ✅ 8 license types — MIT, Apache 2.0, GPL 3.0, BSD, ISC, Unlicense, MPL 2.0
- ✅ Auto-detect author — reads `git config user.name`
- ✅ Auto-detect year — defaults to current year
- ✅ CLI + Library — use from terminal or import in your code
- ✅ Custom output path — write anywhere, not just `./LICENSE`
- ✅ Zero dependencies

## Install

```sh
npm install @scuton/license-gen
```

## CLI

```sh
# Generate MIT license (auto-detect author and year)
npx @scuton/license-gen mit

# Specify author and year
npx @scuton/license-gen apache-2.0 --author "John Doe" --year 2026

# List all available licenses
npx @scuton/license-gen --list

# Custom output path
npx @scuton/license-gen mit --output ./docs/LICENSE
```

## Programmatic Usage

```typescript
import { generateLicense, listLicenses } from '@scuton/license-gen';

// Generate license text
const text = generateLicense({
  license: 'mit',
  author: 'John Doe',
  year: '2026',
});

// Write to file
import { writeFileSync } from 'fs';
writeFileSync('LICENSE', text);

// List all available license IDs
const all = listLicenses();
// ['mit', 'apache-2.0', 'gpl-3.0', 'bsd-2-clause', 'bsd-3-clause', 'isc', 'unlicense', 'mpl-2.0']
```

## Supported Licenses

| ID | Name |
|----|------|
| `mit` | MIT License |
| `apache-2.0` | Apache License 2.0 |
| `gpl-3.0` | GNU General Public License v3 |
| `bsd-2-clause` | BSD 2-Clause "Simplified" |
| `bsd-3-clause` | BSD 3-Clause "New" |
| `isc` | ISC License |
| `unlicense` | The Unlicense |
| `mpl-2.0` | Mozilla Public License 2.0 |

## API

### generateLicense(options)

Generate license text.

Returns: `string`

Throws if the license ID is not recognized.

#### options.license

Type: `string`

License ID (case-insensitive). See supported licenses above.

#### options.author

Type: `string`\
Default: `git config user.name`

Author name for the copyright line.

#### options.year

Type: `string`\
Default: current year

Year for the copyright line.

### listLicenses()

Get an array of all supported license IDs.

Returns: `string[]`

## FAQ

### Where does it get the author name?

From `git config user.name`. If git isn't available, it falls back to `"Your Name"`. You can always override with `--author`.

### Can I add custom licenses?

Not through the CLI, but you can use `generateLicense` programmatically and build your own templates.

## Related

- [@scuton/git-whoami](https://github.com/scuton-technology/git-whoami) — Show your git identity at a glance

## License

MIT © [Scuton Technology](https://scuton.com)
