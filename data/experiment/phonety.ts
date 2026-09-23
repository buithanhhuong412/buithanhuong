import type { PageExperimentPopup } from './types';

const popup: PageExperimentPopup = {
  slug: 'phonety',

  title: 'Phonety - English IPA Pronunciation',

  img: '/images/phonety_avatar.png',

  scale: 0.075,

  marginRight: 110,

  article: {
    intro: '',
    blocks: [
      {
        type: 'grid',
        items: [
          {
            title: '',
            desc: 'Phonety is an English IPA pronunciation project. Visit http://phonety.vercel.app to explore the project.',
          },
        ],
      },
    ],
  },
};

export default popup;