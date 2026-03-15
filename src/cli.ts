import { generateLicense, listLicenses } from './index';
import { writeFileSync } from 'fs';

const args = process.argv.slice(2);

if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
  console.log(`
license-gen — Generate LICENSE files

Usage:
  license-gen <license> [options]

Options:
  --author <name>    Author name (default: git config user.name)
  --year <year>      Year (default: current year)
  --list             List available licenses
  --output <path>    Output path (default: ./LICENSE)

Examples:
  license-gen mit
  license-gen apache-2.0 --author "John Doe" --year 2026
  license-gen --list
`);
  process.exit(0);
}

if (args.includes('--list')) {
  console.log('Available licenses:');
  for (const l of listLicenses()) {
    console.log(`  ${l}`);
  }
  process.exit(0);
}

const license = args[0];
const authorIdx = args.indexOf('--author');
const yearIdx = args.indexOf('--year');
const outputIdx = args.indexOf('--output');

const author = authorIdx !== -1 ? args[authorIdx + 1] : undefined;
const year = yearIdx !== -1 ? args[yearIdx + 1] : undefined;
const output = outputIdx !== -1 ? args[outputIdx + 1] : 'LICENSE';

try {
  const content = generateLicense({ license, author, year });
  writeFileSync(output, content);
  console.log(`Created ${output} (${license})`);
} catch (err: any) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
