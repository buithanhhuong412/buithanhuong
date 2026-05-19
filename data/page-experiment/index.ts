// =====================================================================
// Ordered list of popups for /page-experiment. Order here = carousel order.
// To add a popup: duplicate `_template.ts`, then import + append below.
// =====================================================================

import type { PageExperimentPopup } from './types';
import popup1 from './popup-1';
import popup2 from './popup-2';
import popup3 from './popup-3';
import popup4 from './popup-4';
import popup5 from './popup-5';
import popup6 from './popup-6';
import popup7 from './popup-7';
import popup8 from './popup-8';

export const PAGE_EXPERIMENT_POPUPS: PageExperimentPopup[] = [
    popup1,
    popup2,
    popup3,
    popup4,
    popup5,
    popup6,
    popup7,
    popup8,
];

export type { PageExperimentPopup };
