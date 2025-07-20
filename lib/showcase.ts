export interface ShowcaseItem {
  name: string;
  about: string;
  image: string;
  link: string;
}

export const showcaseData: ShowcaseItem[] = [
  {
    name: 'Cndocs',
    about:
      'Comprehensive documentation platform for computer networking and socket programming. Master Network Programming with Confidence',
    image: '/showcase-images/cndocs.png',
    link: 'https://cn.mvp-subha.me',
  },
  {
    name: 'Love Leetcode',
    about:
      'Master coding through structured learning paths, solve challenging problems, and build your programming expertise with our comprehensive platform.',
    image: '/showcase-images/loveleetcode.png',
    link: 'https://loveleetcode.in',
  },
];
