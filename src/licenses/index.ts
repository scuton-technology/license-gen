import { mit } from './mit';
import { apache2 } from './apache2';
import { gpl3 } from './gpl3';
import { bsd2 } from './bsd2';
import { bsd3 } from './bsd3';
import { isc } from './isc';
import { unlicense } from './unlicense';
import { mpl2 } from './mpl2';

export type LicenseId = 'mit' | 'apache-2.0' | 'gpl-3.0' | 'bsd-2-clause' | 'bsd-3-clause' | 'isc' | 'unlicense' | 'mpl-2.0';

export const LICENSE_REGISTRY: Record<LicenseId, (year: string, author: string) => string> = {
  'mit': mit,
  'apache-2.0': apache2,
  'gpl-3.0': gpl3,
  'bsd-2-clause': bsd2,
  'bsd-3-clause': bsd3,
  'isc': isc,
  'unlicense': unlicense,
  'mpl-2.0': mpl2,
};

export const AVAILABLE_LICENSES = Object.keys(LICENSE_REGISTRY) as LicenseId[];
