import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  troubleMaker?: boolean;
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
};

const defaultTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Yaro Donald',
    role: 'CEO & Founder',
    troubleMaker: false,
    image:
      'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    socialMedia: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    id: 2,
    name: 'Timothy Marcus',
    role: 'CTO',
    troubleMaker: true,

    image:
      'https://img.freepik.com/premium-photo/png-headset-headphones-portrait-cartoon_53876-762197.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    socialMedia: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    id: 3,
    name: 'David Locklear',
    role: 'Lead Designer',
    troubleMaker: false,

    image:
      'https://img.freepik.com/premium-photo/png-cartoon-portrait-glasses-white-background_53876-905385.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    socialMedia: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    id: 4,
    name: 'Michael Brown',
    role: 'Marketing Director',
    troubleMaker: false,

    image:
      'https://img.freepik.com/premium-psd/3d-avatar-character_975163-690.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    socialMedia: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
];

export default function Team3({
  teamMembers = defaultTeamMembers,
  backgroundColor = 'bg-indigo-950',
  title = 'top people at each industry',
  headline = 'Partnered with most of the',
}: {
  title?: string;
  headline?: string;
  backgroundColor?: string;
  teamMembers: TeamMember[];
}) {
  return (
    <section className={cn(`${backgroundColor} w-full py-16 text-white`)}>
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-indigo-400">{headline}</p>
          <h2 className="mb-6 text-3xl font-light">
            <span className="italic">{title}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg">
                <div className="absolute inset-0 z-10 opacity-20 transition-opacity group-hover:opacity-0"></div>
                <img
                  src={member.image || '/placeholder.svg'}
                  alt={member.name}
                  className="object-cover"
                />
              </div>
              <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-indigo-900 to-transparent p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="mb-3 text-indigo-300">{member.role}</p>
                <div className="flex space-x-3">
                  {member.socialMedia?.facebook && (
                    <Link
                      href={member.socialMedia.facebook}
                      className="text-white hover:text-indigo-300"
                    >
                      <Facebook size={18} />
                    </Link>
                  )}
                  {member.socialMedia?.twitter && (
                    <Link
                      href={member.socialMedia.twitter}
                      className="text-white hover:text-indigo-300"
                    >
                      <Twitter size={18} />
                    </Link>
                  )}
                  {member.socialMedia?.linkedin && (
                    <Link
                      href={member.socialMedia.linkedin}
                      className="text-white hover:text-indigo-300"
                    >
                      <Linkedin size={18} />
                    </Link>
                  )}
                </div>
              </div>
              {member.troubleMaker && (
                <div className="bg-opacity-80 absolute top-0 right-0 left-0 bg-indigo-600 p-6">
                  <p className="text-sm font-medium">Trouble Maker</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
