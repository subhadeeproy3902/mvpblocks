import { Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

// Team member data type
type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  socialMedia?: {
    linkedin?: string;
    github?: string;
  };
};

const image =
  'https://img.freepik.com/premium-photo/png-headset-headphones-portrait-cartoon_53876-762197.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid';

const dami_data: TeamMember[] = [
  {
    id: 1,
    name: 'Chris Bruce',
    role: 'Founder & CEO',
    image:
      'https://img.freepik.com/premium-photo/png-headset-headphones-portrait-glasses_53876-855224.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    socialMedia: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 2,
    name: 'Sean Carey',
    role: 'Founder & CTO',
    image:
      'https://img.freepik.com/premium-photo/png-cartoon-portrait-glasses-white-background_53876-905385.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    socialMedia: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 3,
    name: 'Aileen Gomes',
    role: 'Chief of Staff',
    image:
      'https://img.freepik.com/premium-psd/3d-avatar-character_975163-690.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    socialMedia: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 4,
    name: 'Rambo',
    role: 'Blockchain Reliability Engineer',
    image: image,
    socialMedia: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 5,
    name: 'Thomas Stätter',
    role: 'Backend Engineer',
    image:
      'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    socialMedia: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 6,
    name: 'Oleksii Suslov',
    role: 'Systems Engineer',
    image:
      'https://img.freepik.com/premium-photo/png-cartoon-female-adult-doll_53876-747120.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    socialMedia: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 7,
    name: 'Joe Harrison',
    role: 'Frontend Engineer',
    image:
      'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833578.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    socialMedia: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 8,
    name: 'Jason Alex',
    role: 'Site Reliability Engineer',
    image:
      'https://img.freepik.com/free-photo/3d-portrait-businessman_23-2150793883.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    socialMedia: {
      linkedin: '#',
      github: '#',
    },
  },
];

export default function Team8({
  teamMembers = dami_data,
  title1 = 'BLOCKJOY STARTED AS A PROJECT TO',
  title2 = ' MANAGE STAKING WITH FRIENDS AND FAMILY.',
  headline1 = 'A TEAM OF',
  headline2 = 'WEB3 EXPERTS',
  description1 = 'We built advanced tooling to optimize validator management for teams of two. But, due to the sheer difficulty of installing and running nodes, our little VaaS company grew crazy fast.',
  description2 = "e quickly realized that VaaS can't work for a network because it centralizes control. We turned our platform into a SaaS tool so that anyone could launch and run their own node with full control over where and on what infrastructure it runs. Now, network operators can run their own nodes; BlockJoy just takes the headaches away.",
}: {
  title1?: string;
  title2?: string;
  headline1?: string;
  headline2?: string;
  description1?: string;
  description2?: string;
  teamMembers: TeamMember[];
}) {
  return (
    <section className="w-full bg-slate-50 py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 flex flex-col gap-12 md:flex-row">
          <div className="md:w-1/2">
            <div className="mb-4 flex items-center gap-2 text-black">
              <span className="text-black">★</span>
              <span className="rounded-full bg-gray-200 px-3 py-1 text-sm">
                WHO
              </span>
              <span className="rounded-full bg-gray-200 px-3 py-1 text-sm">
                WE
              </span>
              <span className="rounded-full bg-gray-200 px-3 py-1 text-sm">
                ARE
              </span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-black">
              {headline1} <br />
              {headline2}
            </h2>
            <p className="mb-4 text-gray-700">
              {title1}
              <br />
              {title2}
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="mb-4 text-gray-700">{description1}</p>
            <p className="text-gray-700">{description2}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.slice(0, 4).map((member) => (
            <div
              key={member.id}
              className={`h-fit rounded-lg p-6 ${
                member.id === 4 ? 'bg-lime-300' : 'bg-white'
              }`}
            >
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                <img
                  src={member.image || '/placeholder.svg'}
                  alt={member.name}
                  className="object-cover"
                />
              </div>
              <div
                className={`mb-2 inline-block rounded-full px-4 py-1 text-sm font-medium text-black ${
                  member.id === 4 ? 'bg-white' : 'bg-gray-100'
                }`}
              >
                {member.id === 4 ? `"Rambo"` : member.name}
              </div>
              <p className="text-gray-700">{member.role}</p>
              {member.id === 4 && (
                <p className="mt-4 text-sm italic">
                  &quot;You miss 100% of the shots you don&apos;t take&quot;
                  -Wayne Gretzky -Michael Scott
                </p>
              )}
              <div className="mt-2 flex space-x-2">
                {member.socialMedia?.linkedin && (
                  <Link
                    href={member.socialMedia.linkedin}
                    className="text-gray-500 hover:text-blue-700"
                  >
                    <Linkedin size={18} />
                  </Link>
                )}
                {member.socialMedia?.github && (
                  <Link
                    href={member.socialMedia.github}
                    className="text-gray-500 hover:text-gray-900"
                  >
                    <Github size={18} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.slice(4).map((member) => (
            <div key={member.id} className="rounded-lg bg-white p-6">
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                <img
                  src={member.image || '/placeholder.svg'}
                  alt={member.name}
                  className="object-cover"
                />
              </div>
              <div className="mb-2 inline-block rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-black">
                {member.name}
              </div>
              <p className="text-gray-700">{member.role}</p>
              <div className="mt-2 flex space-x-2">
                {member.socialMedia?.linkedin && (
                  <Link
                    href={member.socialMedia.linkedin}
                    className="text-gray-500 hover:text-blue-700"
                  >
                    <Linkedin size={18} />
                  </Link>
                )}
                {member.socialMedia?.github && (
                  <Link
                    href={member.socialMedia.github}
                    className="text-gray-500 hover:text-gray-900"
                  >
                    <Github size={18} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
