
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Article } from "@/types/blog";

export const useArticles = () => {
  return useQuery({
    queryKey: ["articles"],
    queryFn: async (): Promise<Article[]> => {
      const { data, error } = await supabase
        .from("articles")
        .select(`
          *,
          author:authors(*),
          category:categories(*)
        `)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching articles:", error);
        throw error;
      }

      return data.map((article) => ({
        id: article.id,
        title: article.title,
        excerpt: article.excerpt || "",
        content: article.content,
        author: {
          id: article.author.id,
          name: article.author.name,
          bio: article.author.bio || "",
          avatar: article.author.avatar || "",
          email: article.author.email || "",
          socialLinks: {
            twitter: article.author.twitter || undefined,
            linkedin: article.author.linkedin || undefined,
            github: article.author.github || undefined,
          },
        },
        category: {
          id: article.category.id,
          name: article.category.name,
          slug: article.category.slug,
          description: article.category.description || "",
          color: article.category.color,
        },
        tags: article.tags || [],
        publishedAt: article.published_at || article.created_at,
        readTime: article.read_time || 5,
        imageUrl: article.image_url || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
        featured: article.featured || false,
      }));
    },
  });
};
