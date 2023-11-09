import { Article, ArticleIndex, ArticlesService } from "@/services/forem";
import { reactify } from "@/services/reactify/reactify";
import { NextPage } from "next";
import Image from "next/image";

const BlogArticlePage: NextPage<{
  params: { user: string; slug: string };
}> = async ({ params: { slug, user } }) => {
  const data = (await ArticlesService.getArticleByPath(user, slug)) as Required<
    Required<Article>["article"]
  > &
    ArticleIndex;

  const nodes = await reactify(data.body_markdown);

  return (
    <main className="flex flex-col gap-6">
      <div className="h-64 md:h-96 w-full relative rounded-t-lg overflow-clip">
        {data.cover_image && (
          <Image
            src={data.cover_image}
            alt={data.title}
            fill
            className="object-cover "
          />
        )}
      </div>
      <h2 className="text-3xl md:text-5xl">{data.title}</h2>
      <article className="prose dark:prose-invert lg:prose-xl max-w-none prose-code:bg-secondary-background dark:prose-code:bg-secondary-background-dark prose-code:p-1 prose-code:rounded prose-code:after:content-none prose-code:before:content-none">
        {nodes}
      </article>
    </main>
  );
};

export default BlogArticlePage;
