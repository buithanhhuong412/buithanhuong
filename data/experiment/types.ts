import type { ThoughtArticle } from '../thought-content';

export interface PageExperimentPopup {
    slug: string;
    title: string;
    img: string;
    scale: number;
    marginRight: number;
    article: ThoughtArticle;
}
