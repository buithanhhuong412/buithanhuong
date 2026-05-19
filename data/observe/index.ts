// =====================================================================
// Ordered list of popups for /observe. Order here = display order.
// To add a popup: duplicate `_template.ts`, then import + append below.
// =====================================================================

import type { ObservePopup } from './types';
import popup1 from './popup-1';
import popup2 from './popup-2';

export const OBSERVE_POPUPS: ObservePopup[] = [
    popup1,
    popup2,
];

export type { ObservePopup };
