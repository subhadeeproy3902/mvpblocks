import Image from 'next/image';
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
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 mb-12">
          <div className="md:w-1/2">
            <div className="flex text-black items-center gap-2 mb-4">
              <span className="text-black">★</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                WHO
              </span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                WE
              </span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                ARE
              </span>
            </div>
            <h2 className="text-4xl text-black font-bold mb-4">
              {headline1} <br />
              {headline2}
            </h2>
            <p className="text-gray-700 mb-4">
              {title1}
              <br />
              {title2}
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-4">{description1}</p>
            <p className="text-gray-700">{description2}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.slice(0, 4).map((member) => (
            <div
              key={member.id}
              className={`p-6 rounded-lg ${
                member.id === 4 ? 'bg-lime-300' : 'bg-white'
              }`}
            >
              <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                <Image
                  src={member.image || '/placeholder.svg'}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className={`inline-block px-4 py-1 text-black rounded-full text-sm font-medium mb-2 ${
                  member.id === 4 ? 'bg-white' : 'bg-gray-100'
                }`}
              >
                {member.id === 4 ? `"Rambo"` : member.name}
              </div>
              <p className="text-gray-700">{member.role}</p>
              {member.id === 4 && (
                <p className="text-sm mt-4 italic">
                  &quot;You miss 100% of the shots you don&apos;t take&quot;
                  -Wayne Gretzky -Michael Scott
                </p>
              )}
              <div className="flex mt-2 space-x-2">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {teamMembers.slice(4).map((member) => (
            <div key={member.id} className="bg-white p-6 rounded-lg">
              <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                <Image
                  src={member.image || '/placeholder.svg'}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="inline-block text-black px-4 py-1 rounded-full text-sm font-medium mb-2 bg-gray-100">
                {member.name}
              </div>
              <p className="text-gray-700">{member.role}</p>
              <div className="flex mt-2 space-x-2">
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
