
import { Link } from "react-router-dom";
import { Article } from "@/types/blog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle = ({ article }: FeaturedArticleProps) => {
  return (
    <div className="relative h-[70vh] min-h-[500px] overflow-hidden rounded-2xl mb-12">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <Badge className={`${article.category.color} text-white border-0 px-3 py-1`}>
              Featured
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-0">
              {article.category.name}
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed max-w-3xl">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
              />
              <div>
                <p className="font-semibold text-lg">{article.author.name}</p>
                <p className="text-gray-300">
                  {formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })} • {article.readTime} min read
                </p>
              </div>
            </div>
            
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
              <Link to={`/article/${article.id}`}>
                Read Article
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
