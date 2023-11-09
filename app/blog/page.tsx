import { ArticlesService } from "@/services/forem";
import BlogCard from "@/components/modules/blog/blog-card";

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
