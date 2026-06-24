import { Cloud, Shield, Cpu, Network, Users, Briefcase, Layers, Sparkles } from "lucide-react";
import { preview } from "vite";

export const categories = [
  { name: "Salesforce Admin" },
  { name: "Apex Development" },
  { name: "Lightning Web Components" },
  { name: "Salesforce Architecture" },
  { name: "Integration & APIs" },
  { name: "Security & Sharing" },
  { name: "Data Cloud" },
  { name: "Agentforce & AI" },
];

export const courses = [
  {
  id: "salesforce-admin",

  title: "Salesforce Admin",

  instructor: "Jeet Singh",

  category: "Salesforce",

  duration: "24h",

  lessons: 7,

  rating: 4.9,

  students: 14200,

  level: "Beginner",

  thumbnail:
    "https://img.youtube.com/vi/io3xwjYkXvU/maxresdefault.jpg",

  videos: [
    {
      title: "Introduction",
      youtubeId: "io3xwjYkXvU"
    },
    {
      title: "Objects & Relationships",
      youtubeId: "xxxxx"
    },
    {
      title: "Security Model",
      youtubeId: "xxxxx"
    },
    {
      title: "Reports & Dashboards",
      youtubeId: "xxxxx"
    },
    {
      title: "Flow Builder",
      youtubeId: "xxxxx"
    },
    {
      title: "Data Management",
      youtubeId: "xxxxx"
    },
    {
      title: "Certification Tips",
      youtubeId: "xxxxx"
    }
  ]
},
  { id: "aws-architect", title: "AWS Solutions Architect — Professional", instructor: "David Chen", category: "Cloud Computing", duration: "42h", lessons: 124, rating: 4.8, students: 28900, level: "Advanced", progress: 32, gradient: "from-orange-500 to-amber-400" },
  { id: "zero-trust", title: "Zero Trust Security Architecture", instructor: "Priya Anand", category: "Cyber Security", duration: "18h", lessons: 54, rating: 4.9, students: 9800, level: "Advanced", progress: 0, previewVideo: "io3xwjYkXvU" , gradient: "from-red-600 to-rose-500" },
  { id: "llm-engineering", title: "Production LLM Engineering", instructor: "Marcus Webb", category: "AI & Automation", duration: "32h", lessons: 96, rating: 4.9, students: 18600, level: "Advanced", progress: 78, gradient: "from-purple-600 to-fuchsia-500" },
  { id: "distributed-systems", title: "Distributed Systems at Scale", instructor: "Sarah Okonkwo", category: "System Design", duration: "28h", lessons: 72, rating: 4.8, students: 12400, level: "Advanced", progress: 0, gradient: "from-emerald-600 to-teal-500" },
  { id: "exec-leadership", title: "Executive Leadership Mastery", instructor: "Robert Hayes", category: "Leadership", duration: "16h", lessons: 42, rating: 4.7, students: 8200, level: "Intermediate", progress: 45, gradient: "from-amber-600 to-yellow-500" },
  { id: "ea-tog", title: "TOGAF Enterprise Architecture", instructor: "Anna Kowalski", category: "Enterprise Architecture", duration: "36h", lessons: 108, rating: 4.8, students: 7100, level: "Advanced", progress: 0, gradient: "from-indigo-600 to-blue-500" },
  { id: "pm-strategy", title: "Strategic Product Management", instructor: "James Liu", category: "Product Management", duration: "22h", lessons: 64, rating: 4.8, students: 15300, level: "Intermediate", progress: 12, gradient: "from-rose-600 to-pink-500" },
];

export const learningPaths = [
  { id: "cloud-architect", title: "Cloud Solutions Architect", courses: 8, hours: 124, level: "Advanced", description: "Master multi-cloud architecture across AWS, Azure, and GCP.", color: "from-sky-500 to-blue-600" },
  { id: "ai-engineer", title: "AI Engineering Path", courses: 12, hours: 186, level: "Advanced", description: "Build production AI systems with LLMs, RAG, and agents.", color: "from-purple-500 to-fuchsia-600" },
  { id: "security-leader", title: "Security Leadership", courses: 6, hours: 92, level: "Expert", description: "CISO-track curriculum covering governance and zero trust.", color: "from-red-500 to-rose-600" },
];

export const testimonials = [
  { name: "Jennifer Park", role: "VP Engineering, Stripe", text: "LearnSphere transformed how my team upskills. The cloud architecture path alone paid for itself within a quarter.", avatar: "JP" },
  { name: "Ahmed Khalil", role: "Solutions Architect, AWS", text: "Easily the most polished learning experience I've used. The certifications carry real weight with hiring managers.", avatar: "AK" },
  { name: "Maria Gonzalez", role: "CISO, Fintech Co.", text: "We rolled LearnSphere to 400 engineers. Engagement and certification rates are 3× our previous platform.", avatar: "MG" },
];
export const featuredCourses = [
  {
    id: "salesforce-admin",
    title: "Salesforce Administrator Certification",
    instructor: "Elena Martinez",
    category: "Salesforce",
    duration: "24h",
    lessons: 86,
    rating: 4.9,
    level: "Intermediate",
    description: "Master org setup, security, automation, and data management on the Salesforce platform.",
    gradient: "from-blue-600 to-cyan-500",
    
  },
  {
    id: "aws-architect",
    title: "AWS Solutions Architect — Professional",
    instructor: "David Chen",
    category: "Cloud Computing",
    duration: "42h",
    lessons: 124,
    rating: 4.8,
    level: "Advanced",
    description: "Design resilient, cost-optimized, and secure architectures across the AWS ecosystem.",
    gradient: "from-orange-500 to-amber-400",
   
  },
  {
  id: "zero-trust",
  title: "Zero Trust Security Architecture",
  instructor: "Priya Anand",
  category: "Cyber Security",
  duration: "18h",
  lessons: 54,
  rating: 4.9,
  level: "Advanced",
  description: "Implement Zero Trust principles across identity, network, and workload security.",
  gradient: "from-red-600 to-rose-500",
  previewVideo: "qN95TmywOko",   // <-- add this, real YouTube ID
 
}
,  {
    id: "llm-engineering",
    title: "Production LLM Engineering",
    instructor: "Marcus Webb",
    category: "AI & Automation",
    duration: "32h",
    lessons: 96,
    rating: 4.9,
    level: "Advanced",
    description: "Ship reliable LLM-powered systems with RAG, evals, and agentic workflows.",
    gradient: "from-purple-600 to-fuchsia-500",
   
  },
  {
    id: "distributed-systems",
    title: "Distributed Systems at Scale",
    instructor: "Sarah Okonkwo",
    category: "System Design",
    duration: "28h",
    lessons: 72,
    rating: 4.8,
    level: "Advanced",
    description: "Design fault-tolerant, horizontally scalable systems used by millions of users.",
    gradient: "from-emerald-600 to-teal-500",
    
  },
  {
    id: "ea-tog",
    title: "TOGAF Enterprise Architecture",
    instructor: "Anna Kowalski",
    category: "Enterprise Architecture",
    duration: "36h",
    lessons: 108,
    rating: 4.8,
    level: "Advanced",
    description: "Apply the TOGAF framework to align enterprise architecture with business strategy.",
    gradient: "from-indigo-600 to-blue-500",
   
  },
  
];
