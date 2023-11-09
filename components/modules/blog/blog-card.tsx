"use client";

import Card from "@/components/ui/card";
import { ArticleIndex } from "@/services/forem";
import { useImageColor } from "@/utils/hooks/use-image-color";
import { formatDistanceStrict } from "date-fns";
import Image from "next/image";
import React, { CSSProperties, FC, useMemo } from "react";

const BlogCard: FC<{ article: ArticleIndex }> = ({ article }) => {
  const publishedAt = useMemo(
    () =>
      formatDistanceStrict(new Date(article.published_at), new Date(), {
        addSuffix: true,
      }),
    [article.published_at],
  );

  const color = useImageColor(article.cover_image);

  const fullPublishDate = new Date(article.published_at).toLocaleString(undefined, {
    dateStyle: "full",
    timeStyle: "medium",
  });
  return (
    <Card
      className={`flex flex-col gap-4 ${
        article.cover_image
          ? "bg-gradient-to-b to-70% to-secondary-background dark:to-secondary-background-dark"
          : "bg-secondary-background dark:bg-secondary-background-dark"
      } transition-all hover:brightness-90 active:scale-[98%]`}
      key={article.id}
      style={
        {
          "--tw-gradient-from": `rgba(${color.join(
            ",",
          )}, .5) var(--tw-gradient-from-position)`,
          "--tw-gradient-stops":
            "var(--tw-gradient-from), var(--tw-gradient-to)",
        } as CSSProperties
      }
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
      <div className="space-y-4">
        <div className="space-y-1">
          <p
            className="text-gray-500 dark:text-gray-400 text-end"
            title={fullPublishDate}
          >
            {publishedAt}
          </p>
          <h3 className="text-2xl">{article.title}</h3>
        </div>
        <p>{article.description}</p>
      </div>
    </Card>
  );
};

export default BlogCard;
