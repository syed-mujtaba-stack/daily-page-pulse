
import { Link, useParams } from "react-router-dom";
import { categories } from "@/data/blogData";
import { Badge } from "@/components/ui/badge";

const CategoryFilter = () => {
  const { categorySlug } = useParams();

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <Link to="/">
        <Badge 
          variant={!categorySlug ? "default" : "secondary"}
          className="px-4 py-2 text-sm font-medium cursor-pointer hover:bg-primary/80 transition-colors"
        >
          All Categories
        </Badge>
      </Link>
      
      {categories.map((category) => (
        <Link key={category.id} to={`/category/${category.slug}`}>
          <Badge
            variant={categorySlug === category.slug ? "default" : "secondary"}
            className={`px-4 py-2 text-sm font-medium cursor-pointer transition-colors hover:opacity-80 ${
              categorySlug === category.slug 
                ? "bg-primary text-primary-foreground" 
                : `${category.color} text-white border-0`
            }`}
          >
            {category.name}
          </Badge>
        </Link>
      ))}
    </div>
  );
};

export default CategoryFilter;
