export interface Instructor {
  id: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  students: number;
  courses: number;
  bio: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
}

export interface Course {
  id: string;
  title: string;
  instructorId: string; // Changed to instructorId
  category: string;
  rating: number;
  reviews: number;
  students: number;
  price: number;
  image: string;
  description: string;
  lessons: Lesson[];
  progress?: number;
}

export const INSTRUCTORS: Instructor[] = [
  {
    id: "inst1",
    name: "Dr. Angela Yu",
    title: "Senior Software Architect & Mentor",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=60",
    rating: 4.8,
    students: 150000,
    courses: 25,
    bio: "With over 15 years of experience in the industry, Dr. Angela Yu has helped thousands of students achieve their career goals through practical, project-based learning. She is the lead instructor at App Brewery and a Google Developer Expert."
  },
  {
    id: "inst2",
    name: "Gary Simon",
    title: "UI/UX Designer & Educator",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60",
    rating: 4.9,
    students: 80000,
    courses: 15,
    bio: "Gary Simon is a self-taught designer and developer who has been creating websites and applications for over 20 years. He is the founder of DesignCourse.com and is passionate about teaching others how to design and build beautiful user interfaces."
  },
  {
    id: "inst3",
    name: "Jose Portilla",
    title: "Data Scientist & Python Programmer",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop&q=60",
    rating: 4.7,
    students: 200000,
    courses: 30,
    bio: "Jose Portilla is a data scientist and professional trainer who has taught data science and programming to thousands of students worldwide. He is the head of Data Science at Pierian Training and has a B.S. and M.S. from Santa Clara University."
  },
  {
    id: "inst4",
    name: "Phil Ebiner",
    title: "Digital Marketing Expert",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60",
    rating: 4.5,
    students: 100000,
    courses: 20,
    bio: "Phil Ebiner is a best-selling instructor and entrepreneur who has taught over a million students online. He specializes in digital marketing, video production, and photography, and is dedicated to helping others achieve their creative and business goals."
  },
  {
    id: "inst5",
    name: "Sarah Drasner",
    title: "VP of Developer Experience & Vue Core Team",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=60",
    rating: 4.9,
    students: 120000,
    courses: 18,
    bio: "Sarah Drasner is an award-winning Speaker, Head of Developer Experience at Netlify, and a Vue.js Core Team member. She is a master of animation and user experience."
  },
  {
    id: "inst6",
    name: "Maximilian Schwarzmüller",
    title: "Professional Web Developer & Instructor",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=60",
    rating: 4.8,
    students: 2500000,
    courses: 40,
    bio: "Maximilian Schwarzmüller is a professional web developer and instructor who has taught millions of students how to code. He covers a wide range of topics including React, Angular, Vue, Node.js, and more."
  }
];

export const COURSES: Course[] = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    instructorId: "inst1", // Updated to instructorId
    category: "Web Development",
    rating: 4.8,
    reviews: 1250,
    students: 15400,
    price: 89.99,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
    description: "Master HTML, CSS, JavaScript, React, Node, and more in this comprehensive course.",
    progress: 45,
    lessons: [
      { id: "l1", title: "Introduction to HTML", duration: "10:00", completed: true },
      { id: "l2", title: "Advanced CSS Styling", duration: "25:00", completed: true },
      { id: "l3", title: "JavaScript Fundamentals", duration: "45:00", completed: false },
    ]
  },
  {
    id: "2",
    title: "Mastering UI/UX Design with Figma",
    instructorId: "inst2", // Updated to instructorId
    category: "Design",
    rating: 4.9,
    reviews: 850,
    students: 8200,
    price: 59.99,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60",
    description: "Learn how to design beautiful interfaces and user experiences from scratch.",
    progress: 10,
    lessons: [
      { id: "l4", title: "Figma Basics", duration: "15:00", completed: true },
      { id: "l5", title: "Prototyping in Figma", duration: "30:00", completed: false },
    ]
  },
  {
    id: "3",
    title: "Python for Data Science and ML",
    instructorId: "inst3", // Updated to instructorId
    category: "Data Science",
    rating: 4.7,
    reviews: 3200,
    students: 25000,
    price: 74.99,
    image: "https://placehold.co/800x450/png",
    description: "Use Python for data analysis, visualization, and machine learning.",
    lessons: [
      { id: "l6", title: "NumPy Crash Course", duration: "20:00", completed: false },
    ]
  },
  {
    id: "4",
    title: "Digital Marketing Masterclass",
    instructorId: "inst4", // Updated to instructorId
    category: "Marketing",
    rating: 4.5,
    reviews: 450,
    students: 5600,
    price: 49.99,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    description: "A complete guide to social media marketing, SEO, and more.",
    lessons: []
  },
  {
    id: "5",
    title: "Vue.js 3 Fundamentals",
    instructorId: "inst5",
    category: "Web Development",
    rating: 4.9,
    reviews: 500,
    students: 12000,
    price: 64.99,
    image: "https://images.unsplash.com/photo-1607799275518-d58665d48862?w=800&auto=format&fit=crop&q=60",
    description: "Learn the fundamentals of Vue.js 3 and build powerful single-page applications.",
    lessons: []
  },
  {
    id: "6",
    title: "React Native Practical Guide",
    instructorId: "inst6",
    category: "Mobile Development",
    rating: 4.8,
    reviews: 1500,
    students: 30000,
    price: 94.99,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60",
    description: "Build native mobile apps for iOS and Android using React Native.",
    lessons: []
  },
  {
    id: "7",
    title: "Angular - The Complete Guide",
    instructorId: "inst6",
    category: "Web Development",
    rating: 4.7,
    reviews: 2000,
    students: 40000,
    price: 89.99,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60",
    description: "Master Angular (formerly 'Angular 2') and build awesome, reactive web apps.",
    lessons: []
  },
  {
    id: "8",
    title: "Serverless Functions with Netlify",
    instructorId: "inst5",
    category: "DevOps",
    rating: 4.9,
    reviews: 300,
    students: 8000,
    price: 39.99,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=60",
    description: "Learn how to build and deploy serverless functions using Netlify.",
    lessons: []
  }
];

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "UX Designer",
    content: "emark helped me transition from graphic design to UI/UX in just 6 months. The courses are top-notch!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60"
  },
  {
    name: "Michael Chen",
    role: "Fullstack Developer",
    content: "The best learning platform I've used. The hands-on projects really made a difference in my understanding.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60"
  }
];
