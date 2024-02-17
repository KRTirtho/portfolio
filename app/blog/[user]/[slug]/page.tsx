import { metadata } from "@/app/layout";
import AuthorSection from "@/components/modules/blog/author-section";
import { ArticlesService } from "@/services/forem";
import { reactify } from "@/services/reactify/reactify";
import { merge } from "lodash-es";
import { NextPage, Metadata } from "next";
import Image from "next/image";

export const runtime = 'edge';

interface BlogArticlePageProps {
  params: {
    user: string;
    slug: string;
  };
}

export async function generateMetadata({
  params: { slug, user },
}: BlogArticlePageProps): Promise<Metadata> {
  const article = await ArticlesService.getArticleByPath(user, slug);

  return merge(metadata, {
    title: `${article.title} | ${article.user.name}`,
    description: article.description,
    category: "blog",
    applicationName: "KRTirtho",
    keywords: article.tag_list,
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | ${article.user.name}`,
      description: article.description,
      images: article.cover_image
        ? [
            {
              href: article.cover_image!,
              url: article.cover_image!,
            },
          ]
        : undefined,
    },
    openGraph: {
      title: `${article.title} | ${article.user.name}`,
      description: article.description,
      images: article.cover_image
        ? [
            {
              url: article.cover_image,
              width: 800,
              height: 600,
              alt: article.title,
            },
          ]
        : undefined,
      type: "article",
      authors: [article.user.name!],
      publishedTime: new Date(article.published_at).toISOString(),
      tags: article.tag_list,
    },
  });
}

const BlogArticlePage: NextPage<BlogArticlePageProps> = async ({
  params: { slug, user },
}) => {
  const article = await ArticlesService.getArticleByPath(user, slug);

  const nodes = await reactify(article.body_markdown);

  return (
    <main className="flex flex-col gap-6">
      {article.cover_image && (
        <div className="h-64 md:h-96 w-full relative rounded-t-lg overflow-clip">
          <Image
            src={article.cover_image}
            alt={article.title}
            fill
            className="object-cover "
          />
        </div>
      )}
      <h2 className="text-3xl md:text-5xl">{article.title}</h2>
      <AuthorSection article={article} />
      <article className="prose dark:prose-invert lg:prose-xl max-w-none prose-code:bg-secondary-background dark:prose-code:bg-secondary-background-dark prose-code:p-1 prose-code:rounded prose-code:after:content-none prose-code:before:content-none">
        {nodes}
      </article>
    </main>
  );
};

export default BlogArticlePage;
