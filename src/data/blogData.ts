
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
  },
  {
    id: "4",
    name: "Alex Thompson",
    bio: "Full-stack developer and open source contributor with expertise in modern web technologies.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    email: "alex@example.com",
    socialLinks: {
      github: "https://github.com/alexthompson",
      twitter: "https://twitter.com/alexdev"
    }
  },
  {
    id: "5",
    name: "Lisa Park",
    bio: "Product manager and design strategist focused on user-centered digital experiences.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    email: "lisa@example.com",
    socialLinks: {
      linkedin: "https://linkedin.com/in/lisapark",
      twitter: "https://twitter.com/lisapm"
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
    featured: false
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
  },
  {
    id: "6",
    title: "Modern CSS Grid: A Complete Guide",
    excerpt: "Master CSS Grid Layout to create complex, responsive designs with ease and precision.",
    content: `
      <p>CSS Grid has revolutionized how we approach layout design on the web. This comprehensive guide will take you from Grid basics to advanced techniques.</p>
      
      <h2>Grid Fundamentals</h2>
      <p>CSS Grid allows you to create two-dimensional layouts with rows and columns. Unlike Flexbox, which is one-dimensional, Grid gives you complete control over both axes.</p>
      
      <h2>Grid Container Properties</h2>
      <p>Start with display: grid, then define your grid structure using grid-template-columns and grid-template-rows. Use fr units for flexible sizing.</p>
      
      <h2>Positioning Grid Items</h2>
      <p>Use grid-column and grid-row properties to position items precisely. Named grid lines and areas make complex layouts more maintainable.</p>
      
      <h2>Responsive Grid Patterns</h2>
      <p>Combine Grid with media queries and auto-fit/auto-fill for truly responsive designs that adapt to any screen size.</p>
    `,
    author: authors[3],
    category: categories[1],
    tags: ["CSS", "layout", "responsive design", "grid"],
    publishedAt: "2024-01-20",
    readTime: 9,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: "7",
    title: "TypeScript Best Practices for Large Applications",
    excerpt: "Learn how to leverage TypeScript effectively in enterprise-scale applications for better maintainability and developer experience.",
    content: `
      <p>TypeScript has become the standard for large-scale JavaScript applications. Here's how to use it effectively in enterprise environments.</p>
      
      <h2>Type Safety Strategies</h2>
      <p>Implement strict TypeScript configurations and use utility types to create robust type definitions. Avoid 'any' types and leverage union types for flexibility.</p>
      
      <h2>API Integration</h2>
      <p>Use tools like OpenAPI generators or create custom type guards for external API responses. This ensures type safety across your entire application stack.</p>
      
      <h2>Advanced Type Patterns</h2>
      <p>Master conditional types, mapped types, and template literal types to create powerful and reusable type definitions.</p>
      
      <h2>Team Collaboration</h2>
      <p>Establish coding standards, use ESLint with TypeScript rules, and implement pre-commit hooks to maintain code quality across your team.</p>
    `,
    author: authors[3],
    category: categories[2],
    tags: ["TypeScript", "enterprise", "best practices", "type safety"],
    publishedAt: "2024-01-18",
    readTime: 12,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: "8",
    title: "The Psychology of User Interface Design",
    excerpt: "Understanding cognitive principles that make interfaces intuitive and delightful to use.",
    content: `
      <p>Great UI design isn't just about aesthetics—it's about understanding how users think and behave. Let's explore the psychological principles behind effective interface design.</p>
      
      <h2>Cognitive Load Theory</h2>
      <p>Minimize the mental effort required to use your interface. Use progressive disclosure, clear visual hierarchy, and familiar patterns to reduce cognitive burden.</p>
      
      <h2>Visual Perception</h2>
      <p>Leverage Gestalt principles like proximity, similarity, and closure to create intuitive groupings and relationships between interface elements.</p>
      
      <h2>Decision Making</h2>
      <p>Apply Hick's Law to reduce choice paralysis. Provide clear paths and limit options to help users make decisions quickly and confidently.</p>
      
      <h2>Emotional Design</h2>
      <p>Consider the emotional impact of your design choices. Colors, animations, and micro-interactions all contribute to the user's emotional experience.</p>
    `,
    author: authors[4],
    category: categories[1],
    tags: ["psychology", "UI design", "user experience", "cognitive science"],
    publishedAt: "2024-01-22",
    readTime: 8,
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: "9",
    title: "Building Real-time Applications with WebSockets",
    excerpt: "Create interactive, real-time web applications using WebSockets and modern JavaScript frameworks.",
    content: `
      <p>Real-time functionality is essential for modern web applications. Learn how to implement WebSockets for instant communication and live updates.</p>
      
      <h2>WebSocket Fundamentals</h2>
      <p>Unlike HTTP, WebSockets provide full-duplex communication channels. This enables real-time data exchange between client and server.</p>
      
      <h2>Implementation Strategies</h2>
      <p>Use libraries like Socket.IO for robust real-time features including automatic reconnection, room management, and fallback mechanisms.</p>
      
      <h2>React Integration</h2>
      <p>Create custom hooks for WebSocket connections and manage real-time state updates effectively in React applications.</p>
      
      <h2>Scaling Considerations</h2>
      <p>Plan for horizontal scaling with Redis adapters and implement proper connection management for high-traffic applications.</p>
    `,
    author: authors[0],
    category: categories[2],
    tags: ["WebSockets", "real-time", "React", "scaling"],
    publishedAt: "2024-01-25",
    readTime: 10,
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: "10",
    title: "AI-Powered Code Review: Tools and Techniques",
    excerpt: "Explore how artificial intelligence is transforming code review processes and improving code quality.",
    content: `
      <p>AI is revolutionizing software development workflows, and code review is no exception. Discover how AI-powered tools can enhance your development process.</p>
      
      <h2>Automated Code Analysis</h2>
      <p>Tools like DeepCode and CodeClimate use machine learning to identify potential bugs, security vulnerabilities, and code smells automatically.</p>
      
      <h2>Intelligent Suggestions</h2>
      <p>Modern AI assistants can suggest improvements, alternative implementations, and optimization opportunities during the review process.</p>
      
      <h2>Pattern Recognition</h2>
      <p>AI systems learn from your codebase patterns and can enforce consistent coding standards across your entire project.</p>
      
      <h2>Integration Workflows</h2>
      <p>Implement AI code review tools in your CI/CD pipeline for continuous quality assessment and automated feedback.</p>
    `,
    author: authors[2],
    category: categories[3],
    tags: ["AI", "code review", "automation", "quality assurance"],
    publishedAt: "2024-01-28",
    readTime: 7,
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: "11",
    title: "Microservices Architecture: When and How",
    excerpt: "Understanding when microservices make sense and how to implement them effectively for scalable applications.",
    content: `
      <p>Microservices architecture has gained popularity, but it's not always the right solution. Learn when and how to implement microservices effectively.</p>
      
      <h2>When to Choose Microservices</h2>
      <p>Consider microservices when you have complex business domains, need independent scaling, or want technology diversity. Avoid them for simple applications.</p>
      
      <h2>Design Principles</h2>
      <p>Design services around business capabilities, ensure they're independently deployable, and maintain loose coupling between services.</p>
      
      <h2>Communication Patterns</h2>
      <p>Use synchronous communication sparingly. Prefer asynchronous messaging and event-driven architectures for better resilience.</p>
      
      <h2>Operational Challenges</h2>
      <p>Prepare for increased operational complexity. Invest in monitoring, logging, and distributed tracing early in your microservices journey.</p>
    `,
    author: authors[3],
    category: categories[0],
    tags: ["microservices", "architecture", "scalability", "distributed systems"],
    publishedAt: "2024-02-01",
    readTime: 11,
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: "12",
    title: "Remote Work Productivity for Developers",
    excerpt: "Strategies and tools for maintaining high productivity and work-life balance while working remotely.",
    content: `
      <p>Remote work has become the norm for many developers. Here's how to stay productive, engaged, and balanced while working from home.</p>
      
      <h2>Creating Your Workspace</h2>
      <p>Designate a dedicated workspace that's ergonomic and free from distractions. Invest in good lighting, a comfortable chair, and proper monitor setup.</p>
      
      <h2>Communication Strategies</h2>
      <p>Over-communicate with your team. Use asynchronous communication effectively and establish clear boundaries for meetings and deep work time.</p>
      
      <h2>Time Management</h2>
      <p>Structure your day with routines. Use time-blocking techniques and take regular breaks to maintain focus and prevent burnout.</p>
      
      <h2>Staying Connected</h2>
      <p>Maintain social connections with colleagues through virtual coffee chats, pair programming sessions, and team building activities.</p>
    `,
    author: authors[4],
    category: categories[4],
    tags: ["remote work", "productivity", "work-life balance", "communication"],
    publishedAt: "2024-02-03",
    readTime: 6,
    imageUrl: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=800&h=400&fit=crop",
    featured: false
  }
];
