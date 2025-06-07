
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ArticleCard from "@/components/ArticleCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { articles, authors } from "@/data/blogData";
import { ArrowLeft } from "lucide-react";

const AuthorProfile = () => {
  const { id } = useParams();
  
  const author = authors.find(a => a.id === id);
  const authorArticles = articles.filter(article => article.author.id === id);

  if (!author) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Author not found</h1>
          <Link to="/">
            <Button>← Back to Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to articles
        </Link>

        {/* Author Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold mb-4">{author.name}</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            {author.bio}
          </p>
          
          <div className="flex justify-center gap-4 mb-6">
            {author.socialLinks.twitter && (
              <a 
                href={author.socialLinks.twitter}
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            )}
            {author.socialLinks.linkedin && (
              <a 
                href={author.socialLinks.linkedin}
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            )}
            {author.socialLinks.github && (
              <a 
                href={author.socialLinks.github}
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
          </div>
          
          <p className="text-muted-foreground">
            {authorArticles.length} published article{authorArticles.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Author's Articles */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Articles by {author.name}</h2>
          
          {authorArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {authorArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No articles published yet</h3>
              <p className="text-muted-foreground">
                {author.name} hasn't published any articles yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AuthorProfile;
