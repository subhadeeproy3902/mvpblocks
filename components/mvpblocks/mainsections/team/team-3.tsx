import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

// Team member data type
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

export default function TeamSectionVariant8({
  teamMembers,
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
        <div className="text-center mb-12">
          <p className="text-indigo-400 mb-2">{headline}</p>
          <h2 className="text-3xl font-light mb-6">
            <span className="italic">{title}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg">
                <div className="absolute inset-0  opacity-20 group-hover:opacity-0 transition-opacity z-10"></div>
                <Image
                  src={member.image || '/placeholder.svg'}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-indigo-900 to-transparent">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-indigo-300 mb-3">{member.role}</p>
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
                <div className="absolute top-0 left-0 right-0 p-6 bg-indigo-600 bg-opacity-80">
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
