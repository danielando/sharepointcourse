// File: src/components/CreatorSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';
import { creator } from '@/lib/courseData';

const CreatorSection: React.FC = () => {
  return (
    <section className="mb-20 bg-[#f9f8f6] p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Meet the Creator</h2>
      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <Image
          src={creator.image}
          alt={creator.name}
          width={200}
          height={200}
          className="rounded-full mb-6"
        />
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">{creator.name}</h3>
          <div className="flex items-center justify-center mb-4">
            <p className="mr-3">{creator.role}</p>
            <span className="bg-[#44b1ff] text-white text-xs font-semibold px-2.5 py-0.5">MVP</span>
          </div>
          <p className="mb-6">{creator.bio}</p>
          <div className="flex justify-center space-x-4">
            <Link href={creator.socialLinks.linkedin} className="text-[#44b1ff] hover:text-[#3a9fe6]">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href={creator.socialLinks.twitter} className="text-[#44b1ff] hover:text-[#3a9fe6]">
              <Twitter className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
