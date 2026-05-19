import type { ThoughtArticle } from '../thought-content';

export interface ObservePopup {
    slug: string;
    text: string;
    image?: {
        src: string;
        width: string;
        x: number;
        y: number;
    };
    article: ThoughtArticle;
}
