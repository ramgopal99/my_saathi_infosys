import { Boxes, GraduationCap, Users, LayoutGrid, Book, BookOpen } from 'lucide-react'

export const siteConfig = {
  name: "Ishara",
  description: "Learn ASL and explore 3D models",
  mainNav: [
    {
      title: "Products",
      href: "/products",
      icon: LayoutGrid,
      items: [
        {
          title: "Model Viewer",
          href: "/products/model-viewer",
          description: "View and interact with 3D sign language models",
          icon: Boxes
        },
        {
          title: "Learn ASL",
          href: "/products/learn-asl",
          description: "Interactive ASL lessons with 3D demonstrations",
          icon: GraduationCap
        },
        {
          title: "Meet & Learn",
          href: "/products/meet-learn",
          description: "Connect with others and practice ASL in real-time",
          icon: Users
        },
      ],
    },
    {
      title: "Dictionary",
      href: "/dictionary",
      icon: Book,
    },
    {
      title: "Courses",
      href: "/courses",
      icon: BookOpen,
    },
  ],
} 