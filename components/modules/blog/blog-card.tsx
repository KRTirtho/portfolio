import Card from "@/components/ui/card";
import { ArticleIndex } from "@/services/forem";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { FaHeart } from "react-icons/fa";
import AuthorSection from "./author-section";

const BlogCard: FC<{ article: ArticleIndex }> = ({ article }) => {
  return (
    <Link
      href={`/blog/${article.path}`}
      className="rounded-xl overflow-hidden"
      style={{
        background: `url(${article.cover_image})`,
      }}
    >
      <Card
        className={`flex flex-col gap-4 h-full bg-secondary-background dark:bg-secondary-background-dark/70 backdrop-blur-3xl transition-all hover:brightness-90`}
        key={article.id}
      >
        {article.cover_image ? (
          <div className="relative h-56 w-full">
            <Image
              src={article.cover_image}
              alt={article.title}
              fill
              sizes="300px, 600px"
              className="object-cover rounded-lg"
            />
          </div>
        ) : (
          <div className="w-full h-56 rounded-lg bg-background/50 dark:bg-background-dark/50"></div>
        )}
        <div className="space-y-2">
          <AuthorSection article={article} />
          <h3 className="text-2xl mb-2">{article.title}</h3>
          <p>{article.description}</p>
        </div>
        <div className="absolute bottom-5 end-5 flex items-center gap-1 self-end">
          <FaHeart className="text-red-500" />
          {article.public_reactions_count}
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;
