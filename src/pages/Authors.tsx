
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useAuthors } from "@/hooks/useAuthors";
import { useArticles } from "@/hooks/useArticles";

const Authors = () => {
  const { data: authors = [], isLoading: authorsLoading } = useAuthors();
  const { data: articles = [], isLoading: articlesLoading } = useArticles();

  const getAuthorArticleCount = (authorId: string) => {
    return articles.filter(article => article.author.id === authorId).length;
  };

  if (authorsLoading || articlesLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Loading authors...</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Our Authors</h1>
            <p className="text-xl text-muted-foreground">
              Meet the talented writers and industry experts behind DevBlog
            </p>
          </div>

          {/* Authors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((author) => (
              <Link 
                key={author.id} 
                to={`/author/${author.id}`}
                className="group"
              >
                <div className="border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-6"
                  />
                  <h3 className="text-xl font-semibold text-center mb-3 group-hover:text-primary transition-colors">
                    {author.name}
                  </h3>
                  <p className="text-muted-foreground text-center mb-4 line-clamp-3">
                    {author.bio}
                  </p>
                  
                  <div className="text-center mb-4">
                    <span className="text-sm text-muted-foreground">
                      {getAuthorArticleCount(author.id)} article{getAuthorArticleCount(author.id) !== 1 ? 's' : ''}
                    </span>
                  </div>
                  
                  <div className="flex justify-center gap-3">
                    {author.socialLinks.twitter && (
                      <a 
                        href={author.socialLinks.twitter}
                        className="text-primary hover:underline text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Twitter
                      </a>
                    )}
                    {author.socialLinks.linkedin && (
                      <a 
                        href={author.socialLinks.linkedin}
                        className="text-primary hover:underline text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        LinkedIn
                      </a>
                    )}
                    {author.socialLinks.github && (
                      <a 
                        href={author.socialLinks.github}
                        className="text-primary hover:underline text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Authors;
