'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio?: string;
  image: string;
  color?: string; // For the card background color
};

type PremiumTeamProps = {
  title?: string;
  subtitle?: string;
  teamMembers: TeamMember[];
  backgroundColor?: string;
  textColor?: string;
  className?: string;
};

const dami_data: TeamMember[] = [
  {
    id: 1,
    name: 'Kadir Miye',
    role: 'Chief Executive Officer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.',
    image:
      'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 2,
    name: 'Isabella Thompson',
    role: 'Chief Technology Officer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.',
    image:
      'https://img.freepik.com/premium-photo/png-headset-headphones-portrait-cartoon_53876-762197.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 3,
    name: 'Zainab Rahman',
    role: 'Chief Operations Officer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.',
    image:
      'https://img.freepik.com/premium-photo/png-cartoon-portrait-glasses-white-background_53876-905385.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 4,
    name: 'Aiden Davis',
    role: 'Chief Marketing Officer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.',
    image:
      'https://img.freepik.com/premium-psd/3d-avatar-character_975163-690.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 5,
    name: 'Aysha Hussain',
    role: 'UX Designer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.',
    image:
      'https://img.freepik.com/free-photo/fun-3d-illustration-american-referee_183364-81231.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 6,
    name: 'Samira Shah',
    role: 'Product Manager',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.',
    image:
      'https://img.freepik.com/premium-psd/lego-character-with-blue-button-his-chest_1217673-223400.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 7,
    name: 'Ethan Williams',
    role: 'Backend Developer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.',
    image:
      'https://img.freepik.com/premium-photo/there-is-black-girl-with-headphones-yellow-jacket_1034474-106535.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 8,
    name: 'Amina Khan',
    role: 'Frontend Developer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.',
    image:
      'https://img.freepik.com/free-photo/portrait-young-student-with-book-education-day_23-2150980030.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
];

export default function Team9({
  title = 'Partnered with most of the',
  subtitle = 'top people at each industry',
  teamMembers = dami_data,
  backgroundColor = '',
  textColor = '#ffff',
  className,
}: PremiumTeamProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(1); // Default second card active

  // Function to handle mouse enter
  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section
      className={cn('w-full py-16', className)}
      style={{ backgroundColor, color: textColor }}
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-1 text-2xl font-medium">{title}</h2>
          <p className="text-xl font-light italic opacity-80">{subtitle}</p>
        </div>

        <div className="relative flex justify-center gap-4">
          {teamMembers.slice(0, 4).map((member, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={member.id}
                className="w-[16rem] cursor-pointer overflow-hidden rounded-xl text-white transition-all duration-500 ease-in-out"
                style={{
                  backgroundColor: isActive
                    ? member.color || '#3F72AF'
                    : '#112D4E',
                  height: '360px',
                }}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <div className="flex h-full w-full flex-col">
                  {/* Person image */}
                  <div
                    className={cn(
                      'relative transition-all duration-500 ease-in-out',
                      isActive ? 'h-3/5' : 'h-4/5',
                    )}
                  >
                    <img
                      src={member.image || '/placeholder.svg'}
                      alt={member.name}
                      className="aspect-square object-cover object-top"
                    />
                  </div>

                  {/* Text content */}
                  <div
                    className={cn(
                      'flex flex-col p-4 transition-all duration-500 ease-in-out',
                      isActive ? 'h-2/5' : 'h-1/5',
                    )}
                  >
                    {isActive && member.bio && (
                      <div className="mb-2 line-clamp-3 overflow-hidden text-sm opacity-80 transition-opacity duration-500 ease-in-out">
                        {member.bio}
                      </div>
                    )}
                    <div className="mt-auto">
                      <h3 className="text-lg font-medium">{member.name}</h3>
                      <p className="text-sm opacity-70">{member.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
