
import { Link } from "react-router-dom";
import { Article } from "@/types/blog";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  const cardClasses = featured
    ? "group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
    : "group cursor-pointer transition-all duration-300 hover:shadow-lg border rounded-lg overflow-hidden bg-card";

  return (
    <Link to={`/article/${article.id}`} className={cardClasses}>
      <div className={featured ? "relative overflow-hidden rounded-lg" : ""}>
        <img
          src={article.imageUrl}
          alt={article.title}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            featured ? "h-64 md:h-80" : "h-48"
          }`}
        />
        {featured && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        )}
      </div>

      <div className={featured ? "absolute bottom-0 left-0 right-0 p-6 text-white" : "p-6"}>
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className={`${article.category.color} text-white border-0`}>
            {article.category.name}
          </Badge>
          <span className={`text-sm ${featured ? "text-gray-200" : "text-muted-foreground"}`}>
            {formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}
          </span>
        </div>

        <h3 className={`font-bold mb-2 group-hover:text-primary transition-colors ${
          featured ? "text-2xl md:text-3xl text-white" : "text-xl"
        }`}>
          {article.title}
        </h3>

        <p className={`mb-4 line-clamp-3 ${
          featured ? "text-gray-200 text-lg" : "text-muted-foreground"
        }`}>
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className={`text-sm font-medium ${featured ? "text-white" : ""}`}>
                {article.author.name}
              </p>
            </div>
          </div>
          <span className={`text-sm ${featured ? "text-gray-200" : "text-muted-foreground"}`}>
            {article.readTime} min read
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
