// =====================================================================
// Template for an /observe popup.
// To create a new popup:
//   1. Duplicate this file, rename it to popup-<n>.ts
//   2. Edit every field below
//   3. Register the file in `data/observe/index.ts`
// Every popup file is fully self-contained — change anything in here
// and only this popup is affected.
// =====================================================================

import type { ObservePopup } from './types';

const popup: ObservePopup = {
    // Used by the modal lookup. Should be unique across the project.
    slug: 'your-slug-here',

    // Trigger label shown on the /observe page.
    text: "Trigger text shown on the page.",

    // Hero image for both the trigger and the popup.
    image: {
        src: 'images/your-image.png',
        width: '160px',
        x: 12,
        y: 0,
    },

    // Popup body content.
    article: {
        intro: "Short, one-sentence intro shown in the italic pull-quote.",
        blocks: [
            {
                type: 'paragraph',
                content: "First paragraph — opening narrative of the article."
            },
            {
                type: 'grid',
                items: [
                    { title: "Card title 1", desc: "Short description for card one." },
                    { title: "Card title 2", desc: "Short description for card two." }
                ]
            },
            {
                type: 'paragraph',
                content: "Closing paragraph or any additional body text."
            }
        ]
    }
};

export default popup;
