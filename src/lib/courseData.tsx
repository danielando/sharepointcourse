// File: src/lib/courseData.tsx
import React from 'react';
import { 
  Bot, 
  Database, 
  TrendingUp, 
  Users, 
  Shield, 
  BookOpen, 
  Layers, 
  FileText, 
  Lock, 
  Search, 
  Rocket,
  Star
} from "lucide-react";

// Course Overview
export const courseTitle = "Master the Foundation of SharePoint Modern Collaboration";
export const courseSubtitle = "Nothing works without SharePoint. In today's Copilot landscape, it's more important than ever to have a foundation in SharePoint. This course is designed to transform your skills, your career, and your workplace.";

// Why SharePoint Matters
export interface WhySharePointMatters {
  title: string;
  description: string;
  icon: React.ElementType;
}

export const whySharePointMatters: WhySharePointMatters[] = [
  {
    title: "The Backbone of Copilot",
    description: "SharePoint isn't just another app—it's the engine that powers Microsoft Copilot. By mastering SharePoint, you're unlocking Copilot's full potential and positioning yourself at the forefront of Copilot-enhanced productivity.",
    icon: Bot
  },
  {
    title: "Copilot-Optimized Information Architecture",
    description: "Learn to structure your organization's data in ways that Copilot can understand and leverage. This makes your entire Microsoft 365 environment smarter and more responsive to your needs.",
    icon: Database
  },
  {
    title: "Future-Proofing Your Skills",
    description: "As Copilot continues to transform the workplace, proficiency in SharePoint becomes increasingly valuable. You're not just learning a platform; you're investing in your future career prospects.",
    icon: TrendingUp
  },
  {
    title: "The Hub of Digital Collaboration",
    description: "In a world of remote and hybrid work, SharePoint is the central nervous system of effective teamwork. Master it, and you'll drive collaboration to new heights.",
    icon: Users
  },
  {
    title: "Security in the Copilot Age",
    description: "Understanding SharePoint means understanding how to keep your data secure while still making it accessible to Copilot tools. This balance is crucial as organizations embrace Copilot technologies.",
    icon: Shield
  },
  {
    title: "Enhancement of Knowledge Management",
    description: "SharePoint serves as the foundation for Copilot's intelligent features, providing structured data that AI can analyze and leverage. This synergy enhances information discovery and synthesis, making organizational knowledge more accessible and actionable for all users.",
    icon: BookOpen
  }
];

// Testimonials
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "IT Manager",
    content: "This course transformed our team's SharePoint skills. Highly recommended!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Project Coordinator",
    content: "Clear, concise, and practical. I'm now confident in managing our SharePoint sites.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Specialist",
    content: "The course content is top-notch. It's helped streamline our document management.",
    rating: 4
  },
  {
    name: "David Kim",
    role: "Business Analyst",
    content: "Excellent course structure. I've learned so much about SharePoint's capabilities.",
    rating: 5
  }
];

// What You'll Gain
export interface WhatYoullGain {
  title: string;
  description: string;
  icon: React.ElementType;
}

export const whatYoullGain: WhatYoullGain[] = [
  {
    title: "Master SharePoint Fundamentals",
    description: "Gain a solid foundation in SharePoint, the cornerstone of modern workplace collaboration and the engine behind Copilot's effectiveness.",
    icon: BookOpen
  },
  {
    title: "Architect Intelligent Workspaces",
    description: "Learn to design and implement SharePoint sites that serve as smart hubs for team collaboration, optimized for both human users and AI tools like Copilot.",
    icon: Layers
  },
  {
    title: "Enhance Document Management",
    description: "Implement advanced document management strategies in SharePoint that make your content not just organized, but AI-ready for tools like Copilot.",
    icon: FileText
  },
  {
    title: "Optimize Information Architecture",
    description: "Structure your organization's data within SharePoint in ways that enhance discoverability and enable AI tools to leverage it effectively.",
    icon: Database
  },
  {
    title: "Strengthen Workplace Security",
    description: "Understand how to balance data accessibility for AI tools with robust security measures in SharePoint, crucial for the Copilot-driven workplace.",
    icon: Lock
  },
  {
    title: "Drive Digital Collaboration",
    description: "Harness SharePoint's power as the central hub for remote and hybrid teamwork, elevating collaboration in the modern workplace.",
    icon: Users
  },
  {
    title: "Master Information Discovery",
    description: "Implement cutting-edge search and navigation techniques in SharePoint that work hand-in-hand with AI to surface the right information at the right time.",
    icon: Search
  },
  {
    title: "Future-Proof Your Career",
    description: "Position yourself at the forefront of workplace innovation by mastering SharePoint, an increasingly valuable skill as organizations adopt AI technologies like Copilot.",
    icon: Rocket
  }
];

// Course Modules
export interface Module {
  title: string;
  content: string[];
}

export const modules: Module[] = [
  {
    title: "Lesson 1: Introduction to SharePoint Online",
    content: [
      "Outcomes:",
      "- Understand the role of SharePoint in modern workplace collaboration",
      "- Navigate the SharePoint interface confidently",
      "- Create and customize a basic SharePoint site",
      "Skills acquired:",
      "- Logging into SharePoint Online",
      "- Navigating between sites and pages",
      "- Creating a team site",
      "- Customizing site appearance and navigation"
    ]
  },
  {
    title: "Lesson 2: Document Libraries and File Management",
    content: [
      "Outcomes:",
      "- Efficiently manage and collaborate on documents within SharePoint",
      "- Understand version control and co-authoring features",
      "Skills acquired:",
      "- Uploading and organizing files in document libraries",
      "- Using metadata to categorize and find documents",
      "- Co-authoring documents in real-time",
      "- Managing file versions and history"
    ]
  },
  {
    title: "Lesson 3: SharePoint Pages and Web Parts",
    content: [
      "Outcomes:",
      "- Create engaging and informative SharePoint pages",
      "- Utilize web parts to display dynamic content",
      "Skills acquired:",
      "- Creating and editing modern SharePoint pages",
      "- Adding and configuring various web parts",
      "- Embedding multimedia content",
      "- Creating news posts"
    ]
  },
  {
    title: "Lesson 4: SharePoint Search and Navigation",
    content: [
      "Outcomes:",
      "- Quickly find information across SharePoint sites",
      "- Customize navigation for improved user experience",
      "Skills acquired:",
      "- Using SharePoint search effectively",
      "- Creating and managing search alerts",
      "- Customizing site navigation",
      "- Understanding and using managed metadata"
    ]
  },
  {
    title: "Lesson 5: Basic SharePoint Security and Permissions",
    content: [
      "Outcomes:",
      "- Understand SharePoint's permission model",
      "- Manage access to sites, lists, and documents",
      "Skills acquired:",
      "- Setting up SharePoint groups",
      "- Assigning permissions to users and groups",
      "- Creating unique permissions for specific items",
      "- Using sharing features securely"
    ]
  },
  {
    title: "Lesson 6: Integration with Microsoft 365 Apps",
    content: [
      "Outcomes:",
      "- Leverage SharePoint's integration with other Microsoft 365 apps",
      "- Enhance productivity through app interconnectivity",
      "Skills acquired:",
      "- Connecting SharePoint with Teams",
      "- Using SharePoint files in OneDrive",
      "- Integrating SharePoint lists with Microsoft Forms",
      "- Accessing SharePoint content in Outlook"
    ]
  },
  {
    title: "Lesson 7: Microsoft Lists",
    content: [
      "Outcomes:",
      "- Utilize Microsoft Lists to organize and manage data effectively",
      "- Customize lists to suit specific business needs",
      "Skills acquired:",
      "- Creating custom lists",
      "- Adding and modifying columns",
      "- Entering and editing list data",
      "- Creating views to filter and sort information"
    ]
  },
  {
    title: "Lesson 8: Introduction to Content Types and Metadata",
    content: [
      "Outcomes:",
      "- Understand the basic concepts of Content Types and Metadata in SharePoint",
      "- Recognize the importance of these features for advanced information management",
      "- Identify potential use cases for Content Types and Metadata in your organization",
      "Skills acquired:",
      "- Defining Content Types and Metadata at a high level",
      "- Distinguishing between different types of Metadata (e.g., managed metadata, site columns)",
      "- Recognizing how Content Types and Metadata improve content organization and searchability",
      "- Identifying scenarios where Content Types and Metadata can enhance business processes",
      "Topics covered:",
      "- Overview of Content Types and their role in SharePoint",
      "- Introduction to Metadata and its various forms in SharePoint",
      "- Benefits of using Content Types and Metadata for information management",
      "- Real-world examples of Content Types and Metadata implementation",
      "- Preview of advanced features to be covered in the upcoming Content Types and Metadata mini-course"
    ]
  }
];

// Course Creator
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

export const creator: Creator = {
  name: "Daniel Anderson",
  role: "SharePoint Expert & Microsoft MVP",
  bio: "Daniel Anderson is a renowned SharePoint expert and Microsoft Most Valuable Professional (MVP). With over a decade of experience in SharePoint development and administration, Daniel has helped countless organizations optimize their SharePoint environments. His expertise and passion for teaching have made him a sought-after trainer in the Microsoft community.",
  image: "/placeholder.svg",
  socialLinks: {
    linkedin: "https://www.linkedin.com",
    twitter: "https://www.twitter.com"
  }
};

// Impact Story
export const impactStory = {
  title: "Transform careers with purpose.",
  subtitle: "SharePoint Essentials helps you foster deeper connections to build careers with purpose that are not just profitable but sustainable—a valuable investment in the future of work.",
  quote: "Thank you for all your content on YouTube. I'm a firefighter in the United States who has been assigned to supervise an IT section, and when I received this assignment, I knew very little about the world of IT, and even less about Microsoft Office 365. I guess our leadership assumed that since I had gotten my doctorate in industrial psychology, I could figure it out. It's been a fascinating dive into how technology can leverage systems thinking to improve our organizational culture, climate, and organizational and interpersonal communications...",
  author: "A Grateful Subscriber"
};

// Helper function to render star ratings
export const renderStarRating = (rating: number) => {
  return Array(5).fill(0).map((_, i) => (
    <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
  ));
};