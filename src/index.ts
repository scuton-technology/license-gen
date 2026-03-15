import { LICENSE_REGISTRY, AVAILABLE_LICENSES, type LicenseId } from './licenses/index';
import { execSync } from 'child_process';

export { type LicenseId, AVAILABLE_LICENSES };

export interface GenerateOptions {
  license: string;
  author?: string;
  year?: string;
}

function getGitAuthor(): string {
  try {
    return execSync('git config user.name', { encoding: 'utf-8' }).trim();
  } catch {
    return 'Your Name';
  }
}

export function generateLicense(options: GenerateOptions): string {
  const id = options.license.toLowerCase() as LicenseId;
  const generator = LICENSE_REGISTRY[id];
  if (!generator) {
    throw new Error(`Unknown license: "${options.license}". Available: ${AVAILABLE_LICENSES.join(', ')}`);
  }
  const year = options.year ?? new Date().getFullYear().toString();
  const author = options.author ?? getGitAuthor();
  return generator(year, author);
}

export function listLicenses(): LicenseId[] {
  return [...AVAILABLE_LICENSES];
}
