// =====================================================================
// Ordered list of popups for /page-experiment. Order here = carousel order.
// To add a popup: duplicate `_template.ts`, then import + append below.
// =====================================================================

import type { PageExperimentPopup } from './types';

import popup1 from './vgbc';
import popup2 from './a-seal-imprint';
import popup3 from './vnielts';
import popup4 from './fishy-feast';
import popup5 from './what-color';
import popup6 from './vici-dentia';
import popup7 from './kickstar';
import popup8 from './theu-mua-thu';

export const PAGE_EXPERIMENT_POPUPS: PageExperimentPopup[] = [
    popup2,
    popup1,
    popup3,
    popup4,
    popup5,
    popup6,
    popup7,
    popup8,
];

export type { PageExperimentPopup };
