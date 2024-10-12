// File: src/components/AccordionCourseModules.tsx
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { modules } from '@/lib/courseData';

const AccordionCourseModules: React.FC = () => {
  return (
    <section className="bg-[#f9f8f6] p-8">
      <h2 className="text-3xl font-bold mb-8 text-[#1e1e1e]">SharePoint Fundamentals Mini Course</h2>
      <Accordion type="single" collapsible className="space-y-4">
        {modules.map((module, index) => (
          <AccordionItem value={`module-${index}`} key={index}>
            <AccordionTrigger className="text-xl font-medium px-6 py-4 hover:bg-[#f2efe9] text-[#1e1e1e]">
              {module.title}
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-[#f2efe9]">
              <ul className="space-y-2">
                {module.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-[#1e1e1e]">
                    {item.startsWith('-') ? (
                      <span className="flex items-start">
                        <span className="w-2 h-2 bg-[#44b1ff] rounded-full mr-3 mt-2"></span>
                        <span>{item.slice(2)}</span>
                      </span>
                    ) : (
                      <span className="font-semibold">{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default AccordionCourseModules;