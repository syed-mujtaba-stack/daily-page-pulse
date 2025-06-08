
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import FeaturedArticle from "@/components/FeaturedArticle";
import ArticleCard from "@/components/ArticleCard";
import CategoryFilter from "@/components/CategoryFilter";
import Footer from "@/components/Footer";
import { useArticles } from "@/hooks/useArticles";

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { data: articles = [], isLoading, error } = useArticles();

  console.log("Home component - Articles:", articles);
  console.log("Home component - Loading:", isLoading);
  console.log("Home component - Error:", error);

  const featuredArticle = articles.find(article => article.featured);
  const otherArticles = articles.filter(article => !article.featured);

  const filteredArticles = useMemo(() => {
    if (!searchQuery) return otherArticles;
    
    return otherArticles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery, otherArticles]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  if (error) {
    console.error("Home page error:", error);
    return (
      <div className="min-h-screen bg-background">
        <Navigation onSearch={handleSearch} />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Error loading articles</h1>
          <p className="text-muted-foreground mb-4">Please check the console for details.</p>
          <p className="text-sm text-red-500">{error.message}</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation onSearch={handleSearch} />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Loading articles...</h1>
          <p className="text-muted-foreground">Fetching data from Supabase...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation onSearch={handleSearch} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Debug info */}
        <div className="mb-4 p-4 bg-gray-100 rounded text-sm">
          <p>Articles loaded: {articles.length}</p>
          <p>Featured articles: {articles.filter(a => a.featured).length}</p>
          <p>Regular articles: {otherArticles.length}</p>
        </div>

        {/* Featured Article */}
        {featuredArticle && !searchQuery && (
          <FeaturedArticle article={featuredArticle} />
        )}

        {/* Category Filter */}
        <CategoryFilter />

        {/* Search Results Header */}
        {searchQuery && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">
              Search Results for "{searchQuery}"
            </h2>
            <p className="text-muted-foreground">
              Found {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* No Results */}
        {searchQuery && filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or browse our categories instead.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-primary hover:underline"
            >
              Clear search
            </button>
          </div>
        )}

        {/* No Articles at all */}
        {!isLoading && articles.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">No articles available</h3>
            <p className="text-muted-foreground">
              Check your database connection and ensure articles are properly inserted.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
