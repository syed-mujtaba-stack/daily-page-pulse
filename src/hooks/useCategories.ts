
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Category } from "@/types/blog";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async (): Promise<Category[]> => {
      console.log("Fetching categories...");
      
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("name");

      if (error) {
        console.error("Error fetching categories:", error);
        throw error;
      }

      console.log("Raw categories data:", data);

      if (!data) {
        console.log("No categories data returned");
        return [];
      }

      const mappedCategories = data.map((category) => ({
        id: category.id,
        name: category.name,
        slug: category.slug,
        description: category.description || "",
        color: category.color,
      }));

      console.log("Mapped categories:", mappedCategories);
      return mappedCategories;
    },
  });
};
