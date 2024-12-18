import { Leaf, Shield, Heart, Award } from 'lucide-react';

export const features = [
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Plant-Based",
    description: "100% plant-derived protein sources for sustainable nutrition"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Clean Label",
    description: "No artificial ingredients, preservatives, or added sugars"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Nutrition First",
    description: "Scientifically formulated for optimal health benefits"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Premium Quality",
    description: "Highest quality ingredients sourced responsibly"
  }
] as const;