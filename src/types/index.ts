// File: src/types/index.ts
import { LucideIcon } from 'lucide-react'

export interface WhySharePointMatters {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface WhatYoullGain {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Module {
  title: string;
  content: string[];
}

export interface Creator {
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks: {
    linkedin: string;
    twitter: string;
  };
}
