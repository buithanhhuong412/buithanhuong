import type { ObservePopup } from './types';
import { DEFAULT_ARTICLE } from '../thought-content';

const popup: ObservePopup = {
    slug: 'highschool-student-assessment',
    text: "Highschool Student Assessment or fastest-finger-first competition?",
    image: {
        src: 'images/study_1.png',
        width: '160px',
        x: 12,
        y: 0,
    },
    // Replace DEFAULT_ARTICLE with an inline `{ intro, blocks }` object
    // when this popup needs its own custom content.
    article: DEFAULT_ARTICLE,
};

export default popup;
