import { Mail, Phone, MapPin } from 'lucide-react';

export const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    content: "innayanutrifoods@gmail.com",
    link: "mailto:innayanutrifoods@gmail.com"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    content: "+91 77367 41364",
    link: "tel:+917736741364"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Address",
    content: "F223, DLF NTH, Kakkanad, Kochi - 682037",
    link: "https://maps.google.com/?q=F223,+DLF+NTH,+Kakkanad,+Kochi"
  }
] as const;