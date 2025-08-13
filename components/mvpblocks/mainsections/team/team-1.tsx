'use client';
// changes on line 109
import { cn } from '@/lib/utils';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import Link from 'next/link';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  location?: string;
  socialLinks?: { platform: 'github' | 'twitter' | 'linkedin'; url: string }[];
}

interface TeamProps {
  title?: string;
  subtitle?: string;
  members: TeamMember[];
  className?: string;
}

// Default data
const defaultMembers: TeamMember[] = [
  {
    name: 'Alex Morgan',
    role: 'Founder & CEO',
    bio: '10+ years of experience in product development and team leadership. Passionate about building products that make a difference.',
    imageUrl:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&h=300&auto=format&fit=crop',
    location: 'San Francisco, CA',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'github', url: 'https://github.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Designer',
    bio: 'Award-winning designer with a passion for creating beautiful, functional interfaces that delight users.',
    imageUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&h=300&auto=format&fit=crop',
    location: 'New York, NY',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Marcus Johnson',
    role: 'Senior Developer',
    bio: 'Full-stack developer with expertise in React, Node.js, and cloud architecture. Building scalable solutions for complex problems.',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop',
    location: 'Berlin, Germany',
    socialLinks: [
      { platform: 'github', url: 'https://github.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Priya Patel',
    role: 'Product Manager',
    bio: 'Strategic thinker with a track record of launching successful products that users love and businesses value.',
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&h=300&auto=format&fit=crop',
    location: 'London, UK',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
    ],
  },
];

export default function Team1({
  title = 'Meet Our Team',
  subtitle = "We're a diverse group of passionate individuals working together to build amazing products.",
  members = defaultMembers,
  className,
}: TeamProps) {
  return (
    <section className={cn('mx-auto max-w-7xl py-16 md:py-24', className)}>
      <div className="bg-primary/15 absolute top-0 left-0 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-primary/15 absolute top-0 right-0 h-96 w-96 rounded-full blur-3xl" />
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl md:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {members.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Team member card component
function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="group bg-card h-[420px] w-96 overflow-hidden rounded-xl opacity-100 shadow-sm transition-opacity hover:opacity-75">
      <div className="relative h-[200px] w-full overflow-hidden">
        <img
          src={member.imageUrl}
          alt={member.name}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex h-[220px] flex-col p-5">
        {member.location && (
          <div className="text-muted-foreground mb-1 flex items-center text-xs">
            <div className="bg-primary mr-1.5 h-1.5 w-1.5 rounded-full" />
            {member.location}
          </div>
        )}

        <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
        <p className="text-primary mb-2 text-sm font-medium">{member.role}</p>
        <div className="mb-4">
          <p className="text-muted-foreground text-sm">{member.bio}</p>
        </div>
        <div className="mt-auto">
          {member.socialLinks && (
            <div className="flex space-x-3">
              {member.socialLinks.map((link) => (
                <Link prefetch={false}                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full transition-all"
                >
                  {link.platform === 'github' && (
                    <GithubIcon className="h-4 w-4" />
                  )}
                  {link.platform === 'twitter' && (
                    <TwitterIcon className="h-4 w-4" />
                  )}
                  {link.platform === 'linkedin' && (
                    <LinkedinIcon className="h-4 w-4" />
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
