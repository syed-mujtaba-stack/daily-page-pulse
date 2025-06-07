
import { Article, Author, Category } from "@/types/blog";

export const authors: Author[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    bio: "Tech writer and software engineer with 8+ years of experience in web development.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    email: "sarah@example.com",
    socialLinks: {
      twitter: "https://twitter.com/sarahj",
      linkedin: "https://linkedin.com/in/sarahj"
    }
  },
  {
    id: "2",
    name: "Mike Chen",
    bio: "UX designer passionate about creating beautiful and functional user experiences.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    email: "mike@example.com",
    socialLinks: {
      twitter: "https://twitter.com/mikec",
      github: "https://github.com/mikec"
    }
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    bio: "Data scientist and AI researcher exploring the intersection of technology and society.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    email: "emily@example.com",
    socialLinks: {
      linkedin: "https://linkedin.com/in/emilyrod"
    }
  }
];

export const categories: Category[] = [
  {
    id: "1",
    name: "Technology",
    slug: "technology",
    description: "Latest trends and insights in technology",
    color: "bg-blue-500"
  },
  {
    id: "2",
    name: "Design",
    slug: "design",
    description: "UI/UX design principles and best practices",
    color: "bg-purple-500"
  },
  {
    id: "3",
    name: "Development",
    slug: "development",
    description: "Programming tutorials and development guides",
    color: "bg-green-500"
  },
  {
    id: "4",
    name: "AI & Machine Learning",
    slug: "ai-ml",
    description: "Artificial intelligence and machine learning insights",
    color: "bg-orange-500"
  },
  {
    id: "5",
    name: "Productivity",
    slug: "productivity",
    description: "Tips and tools for better productivity",
    color: "bg-pink-500"
  }
];

export const articles: Article[] = [
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the cutting-edge technologies and methodologies that are reshaping how we build for the web.",
    content: `
      <p>The web development landscape is constantly evolving, and 2024 promises to bring exciting new developments. From AI-powered development tools to new frameworks and paradigms, here's what you need to know.</p>
      
      <h2>AI-Powered Development</h2>
      <p>Artificial intelligence is revolutionizing how we write code. Tools like GitHub Copilot and Tabnine are becoming essential parts of the developer toolkit, helping us write better code faster.</p>
      
      <h2>Server Components and the New React</h2>
      <p>React Server Components are changing how we think about rendering and data fetching. This new paradigm allows for better performance and user experience by reducing client-side JavaScript.</p>
      
      <h2>Edge Computing</h2>
      <p>Moving computation closer to users through edge computing is becoming more accessible. Platforms like Vercel Edge Functions and Cloudflare Workers are making it easier to deploy globally distributed applications.</p>
      
      <p>Stay ahead of the curve by experimenting with these technologies and understanding how they can improve your development workflow and application performance.</p>
    `,
    author: authors[0],
    category: categories[0],
    tags: ["web development", "trends", "AI", "react"],
    publishedAt: "2024-01-15",
    readTime: 8,
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: "2",
    title: "Designing for Accessibility: A Complete Guide",
    excerpt: "Learn how to create inclusive designs that work for everyone, regardless of their abilities or disabilities.",
    content: `
      <p>Accessibility in design isn't just about compliance—it's about creating experiences that work for everyone. Here's how to build accessibility into your design process from the ground up.</p>
      
      <h2>Understanding Web Accessibility</h2>
      <p>Web accessibility means ensuring that websites and applications are usable by people with disabilities. This includes visual, auditory, motor, and cognitive impairments.</p>
      
      <h2>Key Principles</h2>
      <ul>
        <li><strong>Perceivable:</strong> Information must be presentable in ways users can perceive</li>
        <li><strong>Operable:</strong> Interface components must be operable</li>
        <li><strong>Understandable:</strong> Information and UI operation must be understandable</li>
        <li><strong>Robust:</strong> Content must be robust enough for various assistive technologies</li>
      </ul>
      
      <h2>Practical Implementation</h2>
      <p>Start with semantic HTML, ensure proper color contrast, provide alternative text for images, and make your site keyboard navigable. These fundamental steps will make your designs more accessible to everyone.</p>
    `,
    author: authors[1],
    category: categories[1],
    tags: ["accessibility", "design", "UX", "inclusive design"],
    publishedAt: "2024-01-12",
    readTime: 6,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: "3",
    title: "Building Scalable React Applications",
    excerpt: "Best practices and patterns for creating React applications that can grow with your team and business needs.",
    content: `
      <p>As your React application grows, maintaining code quality and developer productivity becomes increasingly challenging. Here are proven strategies for building scalable React applications.</p>
      
      <h2>Component Architecture</h2>
      <p>Design your components with reusability and maintainability in mind. Use composition over inheritance and keep components focused on a single responsibility.</p>
      
      <h2>State Management</h2>
      <p>Choose the right state management solution for your needs. While React's built-in state is often sufficient, consider tools like Zustand or Redux Toolkit for complex applications.</p>
      
      <h2>Code Organization</h2>
      <p>Structure your project with clear boundaries. Use feature-based folder structures and maintain consistent naming conventions throughout your codebase.</p>
      
      <h2>Performance Optimization</h2>
      <p>Implement code splitting, lazy loading, and memoization strategically. Monitor your bundle size and use tools like React DevTools Profiler to identify performance bottlenecks.</p>
    `,
    author: authors[0],
    category: categories[2],
    tags: ["react", "scalability", "architecture", "best practices"],
    publishedAt: "2024-01-10",
    readTime: 10,
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: "4",
    title: "Machine Learning for Web Developers",
    excerpt: "An introduction to integrating machine learning capabilities into web applications without a PhD in data science.",
    content: `
      <p>Machine learning is no longer confined to data science teams. Modern web developers can integrate ML capabilities into their applications using accessible tools and APIs.</p>
      
      <h2>Getting Started</h2>
      <p>You don't need to understand the mathematical foundations of machine learning to use it effectively. Start with pre-trained models and APIs before building custom solutions.</p>
      
      <h2>Popular ML APIs</h2>
      <p>Services like OpenAI's GPT models, Google Cloud Vision API, and AWS Rekognition provide powerful ML capabilities through simple REST APIs.</p>
      
      <h2>Client-Side ML with TensorFlow.js</h2>
      <p>TensorFlow.js allows you to run machine learning models directly in the browser, enabling real-time inference without server round trips.</p>
      
      <h2>Practical Applications</h2>
      <p>Consider implementing features like image classification, text summarization, sentiment analysis, or recommendation systems to enhance user experience.</p>
    `,
    author: authors[2],
    category: categories[3],
    tags: ["machine learning", "AI", "web development", "APIs"],
    publishedAt: "2024-01-08",
    readTime: 7,
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: "5",
    title: "Productivity Hacks for Developers",
    excerpt: "Simple techniques and tools that can dramatically improve your coding efficiency and work-life balance.",
    content: `
      <p>Being productive as a developer isn't just about coding faster—it's about working smarter. Here are proven strategies to boost your productivity and maintain a healthy work-life balance.</p>
      
      <h2>Time Management Techniques</h2>
      <p>The Pomodoro Technique can help you maintain focus during coding sessions. Work in 25-minute focused blocks followed by short breaks.</p>
      
      <h2>Essential Tools</h2>
      <ul>
        <li><strong>Code Editor:</strong> Master your IDE with shortcuts and extensions</li>
        <li><strong>Terminal:</strong> Learn command-line tools to automate repetitive tasks</li>
        <li><strong>Note-taking:</strong> Use tools like Notion or Obsidian for knowledge management</li>
      </ul>
      
      <h2>Automation</h2>
      <p>Automate repetitive tasks with scripts, CI/CD pipelines, and code generation tools. Every minute spent on automation saves hours in the long run.</p>
      
      <h2>Continuous Learning</h2>
      <p>Set aside time for learning new technologies and improving existing skills. Stay curious and experiment with new tools and frameworks.</p>
    `,
    author: authors[1],
    category: categories[4],
    tags: ["productivity", "time management", "tools", "automation"],
    publishedAt: "2024-01-05",
    readTime: 5,
    imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=400&fit=crop",
    featured: false
  }
];
