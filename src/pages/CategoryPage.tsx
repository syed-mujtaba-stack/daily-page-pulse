
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ArticleCard from "@/components/ArticleCard";
import CategoryFilter from "@/components/CategoryFilter";
import Footer from "@/components/Footer";
import { articles, categories } from "@/data/blogData";

const CategoryPage = () => {
  const { categorySlug } = useParams();
  
  const category = categories.find(c => c.slug === categorySlug);
  const categoryArticles = articles.filter(article => article.category.slug === categorySlug);

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="text-center mb-12">
          <div className={`inline-block px-4 py-2 rounded-full ${category.color} text-white mb-4`}>
            {category.name}
          </div>
          <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {category.description}
          </p>
          <p className="text-muted-foreground mt-2">
            {categoryArticles.length} article{categoryArticles.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter />

        {/* Articles Grid */}
        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">No articles in this category yet</h3>
            <p className="text-muted-foreground">
              Check back soon for new content!
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
