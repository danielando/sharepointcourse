// File: src/components/CreatorSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';
import { creator } from '@/lib/courseData';

const CreatorSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">{creator.name}</h2>
            <p className="text-xl text-gray-600">{creator.role}</p>
            <p className="text-gray-600">{creator.bio}</p>
            <div className="flex space-x-4">
              <a href={creator.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                LinkedIn
              </a>
              <a href={creator.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                Twitter
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img src={creator.image} alt={creator.name} className="w-64 h-64 object-cover rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
