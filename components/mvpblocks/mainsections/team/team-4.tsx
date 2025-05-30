'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

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
  backgroundColor?: string;
  socialMedia?: SocialMediaLinks;
  expertise?: string[];
  department?: string;
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

type Department =
  | 'all'
  | 'management'
  | 'product'
  | 'design'
  | 'marketing'
  | 'sales'
  | 'customer'
  | 'operations';

export interface ElegantTeamProps extends TeamSectionProps {
  departments?: Array<{
    id: Department;
    label: string;
  }>;
}

const elegantTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Emmy Rosum',
    role: 'Co-Founder and CEO',
    department: 'management',
    image:
      'https://img.freepik.com/premium-psd/3d-avatar-character_975163-690.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 2,
    name: 'Orlando Diggs',
    role: 'Co-Founder and COO',
    department: 'management',
    image:
      'https://img.freepik.com/premium-psd/3d-avatar-character_975163-678.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 3,
    name: 'Sophie Chamberlain',
    role: 'Head of Sales',
    department: 'sales',
    image:
      'https://img.freepik.com/premium-psd/3d-avatar-character_975163-725.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 4,
    name: 'Lana Steiner',
    role: 'VP of Customer Success',
    department: 'customer',
    image:
      'https://img.freepik.com/premium-photo/female-character-3d-rendering-isolated-background_150525-107.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 5,
    name: 'Emily Donnavan',
    role: 'Product Lead',
    department: 'product',
    image:
      'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671163.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 6,
    name: 'Sasha Kindred',
    role: 'VP of Marketing',
    department: 'marketing',
    image:
      'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671132.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 7,
    name: 'Jessica Dobrev',
    role: 'Backend Lead',
    department: 'operations',
    image:
      'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671159.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 8,
    name: 'Drew Cano',
    role: 'Head of UX',
    department: 'design',
    image:
      'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671136.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
];

export default function Team4({
  title = 'Meet the team that makes the magic happen',
  subtitle = 'Meet our diverse team of world-class creators, designers, and problem solvers.',
  teamMembers = elegantTeamMembers,
  backgroundColor = '#ffffff',
  textColor = '#000000',
  secondaryColor = '#666666',
  className,
  departments = [
    { id: 'all', label: 'View all' },
    { id: 'management', label: 'Management' },
    { id: 'product', label: 'Product' },
    { id: 'design', label: 'Design' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'sales', label: 'Sales' },
    { id: 'customer', label: 'Customer Success' },
    { id: 'operations', label: 'Operations' },
  ],
}: ElegantTeamProps) {
  const [activeDepartment, setActiveDepartment] = useState<Department>('all');

  // Filter team members by department
  const filteredTeamMembers =
    activeDepartment === 'all'
      ? teamMembers
      : teamMembers.filter(
          (member) =>
            member.department?.toLowerCase() === activeDepartment ||
            member.role?.toLowerCase().includes(activeDepartment),
        );

  // Split the title to apply italic styling to "magic"
  const titleParts = title.split(/(magic)/);

  return (
    <section
      className={cn('py-16 w-full', className)}
      style={{ backgroundColor, color: textColor }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 leading-tight">
            {titleParts.map((part, index) =>
              part.toLowerCase() === 'magic' ? (
                <span key={index} className="italic">
                  {part}
                </span>
              ) : (
                <span key={index}>{part}</span>
              ),
            )}
          </h2>
          <p
            className="text-base max-w-3xl mx-auto"
            style={{ color: secondaryColor }}
          >
            {subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveDepartment(dept.id)}
              className={cn(
                'px-4 py-2 text-sm font-medium transition-colors rounded-md',
                activeDepartment === dept.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-200',
              )}
            >
              {dept.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTeamMembers.map((member) => (
            <div
              key={member.id}
              className="relative rounded-lg overflow-hidden transition-all"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={member.image || '/placeholder.svg'}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-white border border-gray-100 rounded-lg py-3 px-2 mx-auto max-w-[90%] -mt-[2.5rem] relative z-10 text-center">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm" style={{ color: secondaryColor }}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
