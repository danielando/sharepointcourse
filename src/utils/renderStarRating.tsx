import React from 'react';
import { Star } from 'lucide-react';

export const renderStarRating = (rating: number) => {
  return Array(5).fill(0).map((_, i) => (
    <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
  ));
};
