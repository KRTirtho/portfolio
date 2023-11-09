import { ArticlesService } from "@/services/forem";
import BlogCard from "@/components/modules/blog/blog-card";
import { Metadata } from "next";
import { merge } from "lodash-es";
import { metadata as rootMetadata } from "@/app/layout";

export const metadata: Metadata = merge(rootMetadata, {
  title: "Blog | Kingkor Roy Tirtho",
  category: "blog",
  description: "Blogs by Kingkor Roy Tirtho",
  appleWebApp: {
    title: "Blog | Kingkor Roy Tirtho",
  },
  twitter: {
    title: "Blog | Kingkor Roy Tirtho",
    description: "Blogs by Kingkor Roy Tirtho",
  },
  openGraph: {
    type: "website",
    title: "Blog | Kingkor Roy Tirtho",
    description: "Blogs by Kingkor Roy Tirtho",
  },
});

const Blog = async () => {
  const articles = await ArticlesService.getUserPublishedArticles();

  return (
    <div className="grid md:grid-cols-2 gap-5">
      {articles.map((article) => (
        <BlogCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Blog;
