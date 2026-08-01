import type { PageExperimentPopup } from './types';
import { DEFAULT_ARTICLE } from '../thought-content';

const popup: PageExperimentPopup = {
    slug: 'vgbc',
    title: 'vgbc',
    img: 'images/2.avif',
    scale: 0.1,
    marginRight: 85,
    // Replace DEFAULT_ARTICLE with an inline `{ intro, blocks }` object
    // when this popup needs its own custom content.
    article: DEFAULT_ARTICLE,
};

export default popup;
