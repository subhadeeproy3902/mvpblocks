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
  {
    name: 'Skul',
    about:
      'Our platform streamlines administration, communication, and learning, helping schools run efficiently and stay connected. Manage students, teachers, and operations—all from one powerful dashboard.',
    image: '/showcase-images/skul.png',
    link: 'https://skul-gamma.vercel.app/',
  },
  {
    name: 'Zapdrop',
    about:
      'The fastest bridge between your files and your recipients. Drag, drop, and share expiring links in seconds.',
    image: '/showcase-images/zapdrop.png',
    link: 'https://zapdrop.slyde.tech/',
  },
];
