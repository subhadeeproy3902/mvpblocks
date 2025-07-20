'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Cabin_Condensed } from 'next/font/google';
import { Facebook, Instagram, Twitter, Globe } from 'lucide-react';

const mont = Cabin_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

type SocialMediaLinks = {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  email?: string;
  dribbble?: string;
};

type TeamMember = {
  id: number;
  name: string;
  role: string;
  email?: string;
  bio?: string;
  image: string;
  backgroundColor?: string; // For colored backgrounds
  socialMedia?: SocialMediaLinks;
  expertise?: string[];
};

interface TeamSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  teamMembers: TeamMember[];
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  secondaryColor?: string;
  className?: string;
}

const teamMembers3D: TeamMember[] = [
  {
    id: 1,
    name: 'Kadir Miye',
    role: 'Chief Executive Officer',
    email: 'kadir@bukit.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.',
    image:
      'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    backgroundColor: '#7f1d1d', // bg-red-900
    socialMedia: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      website: '#',
    },
  },
  {
    id: 2,
    name: 'Isabella Thompson',
    role: 'Chief Technology Officer',
    email: 'isabella@bukit.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.',
    image:
      'https://img.freepik.com/premium-photo/png-headset-headphones-portrait-cartoon_53876-762197.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    backgroundColor: '#b45309', // bg-amber-700
    socialMedia: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      website: '#',
    },
  },
  {
    id: 3,
    name: 'Zainab Rahman',
    role: 'Chief Operations Officer',
    email: 'zainab@bukit.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.',
    image:
      'https://img.freepik.com/premium-photo/png-cartoon-portrait-glasses-white-background_53876-905385.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    backgroundColor: '#1e3a8a', // bg-blue-900
    socialMedia: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      website: '#',
    },
  },
  {
    id: 4,
    name: 'Aiden Davis',
    role: 'Chief Marketing Officer',
    email: 'aiden@bukit.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.',
    image:
      'https://img.freepik.com/premium-psd/3d-avatar-character_975163-690.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    backgroundColor: '#7f1d1d', // bg-red-900
    socialMedia: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      website: '#',
    },
  },
  {
    id: 5,
    name: 'Aysha Hussain',
    role: 'UX Designer',
    email: 'aysha@bukit.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.',
    image:
      'https://img.freepik.com/free-photo/fun-3d-illustration-american-referee_183364-81231.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    backgroundColor: '#1e3a8a', // bg-blue-900
    socialMedia: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      website: '#',
    },
  },
  {
    id: 6,
    name: 'Samira Shah',
    role: 'Product Manager',
    email: 'samira@bukit.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.',
    image:
      'https://img.freepik.com/premium-psd/lego-character-with-blue-button-his-chest_1217673-223400.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    backgroundColor: '#b45309', // bg-amber-700
    socialMedia: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      website: '#',
    },
  },
  {
    id: 7,
    name: 'Ethan Williams',
    role: 'Backend Developer',
    email: 'ethan@bukit.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.',
    image:
      'https://img.freepik.com/premium-photo/there-is-black-girl-with-headphones-yellow-jacket_1034474-106535.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    backgroundColor: '#065f46', // bg-emerald-800
    socialMedia: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      website: '#',
    },
  },
  {
    id: 8,
    name: 'Amina Khan',
    role: 'Frontend Developer',
    email: 'amina@bukit.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.',
    image:
      'https://img.freepik.com/free-photo/portrait-young-student-with-book-education-day_23-2150980030.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    backgroundColor: '#b45309', // bg-amber-700
    socialMedia: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      website: '#',
    },
  },
];

export default function Team7({
  title = 'We are Born For Technology',
  subtitle = '• Our awesome team',
  description = 'We make life easier for our customers and community through reliable, affordable, and useful tech innovations',
  teamMembers = teamMembers3D,
  backgroundColor = '#111111',
  textColor = '#ffffff',
  accentColor = '#10b981',
  secondaryColor = '#6b7280',
  className,
}: TeamSectionProps) {
  // Default social media icons if not specified
  const getSocialIcon = (type: string, url: string) => {
    switch (type) {
      case 'facebook':
        return (
          <Link
            href={url}
            className="text-gray-400 transition-colors hover:text-white"
          >
            <Facebook size={18} />
          </Link>
        );
      case 'instagram':
        return (
          <Link
            href={url}
            className="text-gray-400 transition-colors hover:text-white"
          >
            <Instagram size={18} />
          </Link>
        );
      case 'twitter':
        return (
          <Link
            href={url}
            className="text-gray-400 transition-colors hover:text-white"
          >
            <Twitter size={18} />
          </Link>
        );
      case 'website':
        return (
          <Link
            href={url}
            className="text-gray-400 transition-colors hover:text-white"
          >
            <Globe size={18} />
          </Link>
        );
      default:
        return null;
    }
  };

  return (
    <section
      className={cn('w-full py-16 text-white', className)}
      style={{ backgroundColor, color: textColor }}
    >
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12">
          <p
            className={cn(
              'mb-2 text-sm font-medium tracking-wider',
              mont.className,
            )}
            style={{ color: accentColor }}
          >
            {subtitle}
          </p>
          <h2
            className={cn(
              'mb-6 text-4xl leading-tight font-bold md:text-5xl',
              mont.className,
            )}
          >
            {title}
          </h2>
          <p className="max-w-2xl text-lg" style={{ color: secondaryColor }}>
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="group">
              <div
                className="mb-4 aspect-square overflow-hidden rounded-lg"
                style={{ backgroundColor: member.backgroundColor || '#374151' }}
              >
                <img
                  src={member.image || '/placeholder.svg'}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              {member.email && (
                <p className="mb-2 text-sm" style={{ color: accentColor }}>
                  {member.email}
                </p>
              )}
              {member.bio && (
                <p className="mb-4 text-sm" style={{ color: secondaryColor }}>
                  {member.bio}
                </p>
              )}
              <div className="mt-2 flex space-x-4">
                {member.socialMedia &&
                  Object.entries(member.socialMedia).map(
                    ([key, value]) =>
                      value && (
                        <span key={key}>{getSocialIcon(key, value)}</span>
                      ),
                  )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-right">
          <Link
            href="#"
            className="inline-flex items-center text-lg hover:underline"
            style={{ color: accentColor }}
          >
            Learn more <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
