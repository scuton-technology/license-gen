import { describe, it, expect } from 'vitest';
import { generateLicense, listLicenses } from '../src/index';

describe('generateLicense', () => {
  it('should generate MIT license', () => {
    const text = generateLicense({ license: 'mit', author: 'Test', year: '2026' });
    expect(text).toContain('MIT License');
    expect(text).toContain('2026');
    expect(text).toContain('Test');
  });

  it('should generate Apache 2.0 license', () => {
    const text = generateLicense({ license: 'apache-2.0', author: 'Test', year: '2026' });
    expect(text).toContain('Apache');
    expect(text).toContain('2026');
  });

  it('should generate ISC license', () => {
    const text = generateLicense({ license: 'isc', author: 'Test', year: '2026' });
    expect(text).toContain('ISC');
  });

  it('should generate BSD 2-Clause license', () => {
    const text = generateLicense({ license: 'bsd-2-clause', author: 'Test', year: '2026' });
    expect(text).toContain('BSD 2-Clause');
  });

  it('should generate BSD 3-Clause license', () => {
    const text = generateLicense({ license: 'bsd-3-clause', author: 'Test', year: '2026' });
    expect(text).toContain('BSD 3-Clause');
  });

  it('should throw for unknown license', () => {
    expect(() => generateLicense({ license: 'unknown' })).toThrow('Unknown license');
  });

  it('should list available licenses', () => {
    const licenses = listLicenses();
    expect(licenses).toContain('mit');
    expect(licenses).toContain('apache-2.0');
    expect(licenses).toContain('gpl-3.0');
    expect(licenses.length).toBeGreaterThanOrEqual(8);
  });

  it('should be case insensitive', () => {
    const text = generateLicense({ license: 'MIT', author: 'Test', year: '2026' });
    expect(text).toContain('MIT License');
  });
});
