
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Author } from "@/types/blog";

export const useAuthors = () => {
  return useQuery({
    queryKey: ["authors"],
    queryFn: async (): Promise<Author[]> => {
      console.log("Fetching authors...");
      
      const { data, error } = await supabase
        .from("authors")
        .select("*")
        .order("name");

      if (error) {
        console.error("Error fetching authors:", error);
        throw error;
      }

      console.log("Raw authors data:", data);

      if (!data) {
        console.log("No authors data returned");
        return [];
      }

      const mappedAuthors = data.map((author) => ({
        id: author.id,
        name: author.name,
        bio: author.bio || "",
        avatar: author.avatar || "",
        email: author.email || "",
        socialLinks: {
          twitter: author.twitter || undefined,
          linkedin: author.linkedin || undefined,
          github: author.github || undefined,
        },
      }));

      console.log("Mapped authors:", mappedAuthors);
      return mappedAuthors;
    },
  });
};
