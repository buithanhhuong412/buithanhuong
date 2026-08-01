// =====================================================================
// Template for a /page-experiment popup.
// To create a new popup:
//   1. Duplicate this file, rename it to popup-<n>.ts
//   2. Edit every field below
//   3. Register the file in `data/page-experiment/index.ts`
// Every popup file is fully self-contained — change anything in here
// and only this popup is affected.
// =====================================================================

import type { PageExperimentPopup } from './types';

const popup: PageExperimentPopup = {
    // Used by the modal lookup. Should be unique across the project.
    slug: 'your-slug-here',

    // Title shown under the image (visible on hover).
    title: 'your title',

    // Hero image for both the carousel item and the popup.
    img: 'images/your-image.png',

    // Carousel layout: scale = fraction of viewport width (e.g. 0.1 = 10vw).
    scale: 0.1,

    // Carousel layout: right padding between this slide and the next (px).
    marginRight: 80,

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
