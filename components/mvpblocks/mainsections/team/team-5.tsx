'use client';

import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';

const mont = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// Team member data type
type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  troubleMaker?: boolean;
};

type TeamSectionProps = {
  teamMembers: TeamMember[];
};

const teamMembers3D: TeamMember[] = [
  {
    id: 1,
    name: 'Kadir Miye',
    role: 'Chief Executive Officer',
    image:
      'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 2,
    name: 'Isabella Thompson',
    role: 'Chief Technology Officer',
    image:
      'https://img.freepik.com/premium-photo/png-headset-headphones-portrait-cartoon_53876-762197.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 3,
    name: 'Zainab Rahman',
    role: 'Chief Operations Officer',
    image:
      'https://img.freepik.com/premium-photo/png-cartoon-portrait-glasses-white-background_53876-905385.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 4,
    name: 'Aiden Davis',
    role: 'Chief Marketing Officer',
    image:
      'https://img.freepik.com/premium-psd/3d-avatar-character_975163-690.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 5,
    name: 'Aysha Hussain',
    role: 'UX Designer',
    image:
      'https://img.freepik.com/free-photo/fun-3d-illustration-american-referee_183364-81231.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 6,
    name: 'Samira Shah',
    role: 'Product Manager',
    image:
      'https://img.freepik.com/premium-psd/lego-character-with-blue-button-his-chest_1217673-223400.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 7,
    name: 'Ethan Williams',
    role: 'Backend Developer',
    image:
      'https://img.freepik.com/premium-photo/there-is-black-girl-with-headphones-yellow-jacket_1034474-106535.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 8,
    name: 'Amina Khan',
    role: 'Frontend Developer',
    image:
      'https://img.freepik.com/free-photo/portrait-young-student-with-book-education-day_23-2150980030.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
];

export default function Team5({
  teamMembers = teamMembers3D.slice(0, 4),
}: TeamSectionProps) {
  return (
    <section className="bg-background w-full py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2
            className={cn(
              'mb-6 text-4xl leading-tight font-semibold md:text-5xl',
              mont.className,
            )}
          >
            We bring a wealth of experience from a wide range of backgrounds
          </h2>
          <p className="text-foreground/80 text-lg">
            Our philosophy is simple; hire great people and give them the
            resources and support to do their best work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="group">
              <div className="relative mb-4 aspect-square overflow-hidden rounded-sm">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-medium">{member.name}</h3>
              <p className="text-primary text-base">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
