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
  title?: string;
  subtitle?: string;
  teamMembers: TeamMember[];
  backgroundColor?: string;
  textColor?: string;
  secondaryColor?: string;
  className?: string;
};

export interface CreativeTeamProps extends TeamSectionProps {
  gradientColor?: string;
  accentColor?: string;
  verticalText?: {
    left: string;
    right: string;
  };
}

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

export default function Team6({
  title = 'Meet our team!',
  subtitle,
  teamMembers = teamMembers3D,
  backgroundColor = '#111111',
  textColor = '#ffffff',
  accentColor = '#ef4444',
  secondaryColor = '#ffffff',
  className,
  gradientColor = 'from-rose-500 to-rose-300',
  verticalText = {
    left: 'Meet',
    right: 'Team',
  },
}: CreativeTeamProps) {
  // Define the layout for the team members based on the image
  const layoutPositions = [
    { gridArea: '1 / 1 / 3 / 2', className: 'col-span-1 row-span-2' },
    { gridArea: '1 / 2 / 2 / 3', className: 'col-span-1 row-span-1' },
    { gridArea: '2 / 2 / 4 / 3', className: 'col-span-1 row-span-2' },
    { gridArea: '1 / 3 / 3 / 4', className: 'col-span-1 row-span-2' },
  ];

  return (
    <section
      className={cn(
        'relative w-full overflow-hidden rounded-3xl py-16',
        className,
      )}
      style={{ backgroundColor, color: textColor }}
    >
      <div className="relative container mx-auto px-4">
        {/* Vertical text on left */}
        <div className="absolute top-0 bottom-0 left-0 flex items-center">
          <div
            className="origin-center -rotate-90 transform text-8xl font-bold whitespace-nowrap opacity-20"
            style={{ color: accentColor }}
          >
            {verticalText.left}
          </div>
        </div>

        {/* Vertical text on right */}
        <div className="absolute top-0 right-0 bottom-0 flex items-center">
          <div
            className="origin-center -rotate-90 transform text-8xl font-bold whitespace-nowrap opacity-20"
            style={{ color: accentColor }}
          >
            {verticalText.right}
          </div>
        </div>

        <div className="mb-12 text-center">
          <h2 className={cn('text-4xl font-bold md:text-5xl', mont.className)}>
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg" style={{ color: secondaryColor }}>
              {subtitle}
            </p>
          )}
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {teamMembers.slice(0, 6).map((member, index) => (
            <div
              key={member.id}
              className={cn(
                'relative overflow-hidden',
                index < layoutPositions.length
                  ? layoutPositions[index].className
                  : '',
              )}
              style={{
                gridArea:
                  index < layoutPositions.length
                    ? layoutPositions[index].gridArea
                    : undefined,
              }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${gradientColor} z-10 opacity-40 mix-blend-multiply`}
                ></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover"
                />
                <div className="absolute right-0 bottom-0 left-0 z-20 p-4">
                  <h3 className="text-xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-white opacity-90">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
