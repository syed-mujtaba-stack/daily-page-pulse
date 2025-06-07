
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { authors } from "@/data/blogData";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">About DevBlog</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A modern platform where developers, designers, and tech enthusiasts share knowledge, 
              insights, and experiences about the ever-evolving world of technology.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                At DevBlog, we believe that knowledge should be accessible to everyone. Our mission is to 
                create a platform where experienced professionals can share their expertise and newcomers 
                can learn from the best in the industry.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We cover a wide range of topics including web development, software engineering, UI/UX design, 
                artificial intelligence, machine learning, and productivity tools. Our goal is to help you 
                stay current with the latest trends and technologies in the tech world.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're looking to learn a new programming language, understand design principles, 
                or explore emerging technologies, DevBlog is your go-to resource for high-quality, 
                practical content.
              </p>
            </div>
          </div>

          {/* What We Offer */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">In-Depth Tutorials</h3>
                <p className="text-muted-foreground">
                  Step-by-step guides and tutorials that help you master new technologies and frameworks.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Industry Insights</h3>
                <p className="text-muted-foreground">
                  Analysis and commentary on the latest trends and developments in the tech industry.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Best Practices</h3>
                <p className="text-muted-foreground">
                  Learn from experienced professionals about coding standards, design patterns, and methodologies.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Career Guidance</h3>
                <p className="text-muted-foreground">
                  Tips and advice for advancing your career in technology and building a successful professional network.
                </p>
              </div>
            </div>
          </div>

          {/* Our Authors */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Authors</h2>
            <p className="text-muted-foreground mb-8">
              Our content is created by industry experts with years of real-world experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {authors.map((author) => (
                <Link 
                  key={author.id} 
                  to={`/author/${author.id}`}
                  className="group border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold text-center mb-2 group-hover:text-primary transition-colors">
                    {author.name}
                  </h3>
                  <p className="text-muted-foreground text-center text-sm">
                    {author.bio}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="text-center border-t pt-16">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have questions, suggestions, or want to contribute to DevBlog? 
              We'd love to hear from you.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="mailto:hello@devblog.com" 
                className="text-primary hover:underline"
              >
                hello@devblog.com
              </a>
              <span className="text-muted-foreground">|</span>
              <a 
                href="https://twitter.com/devblog" 
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @devblog
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
