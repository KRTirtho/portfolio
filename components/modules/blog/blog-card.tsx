"use client";

import Card from "@/components/ui/card";
import { ArticleIndex } from "@/services/forem";
import { formatDistanceStrict } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useMemo } from "react";
import { FaHeart } from "react-icons/fa";

const BlogCard: FC<{ article: ArticleIndex }> = ({ article }) => {
  const publishedAt = useMemo(
    () =>
      formatDistanceStrict(new Date(article.published_at), new Date(), {
        addSuffix: true,
      }),
    [article.published_at],
  );

  const fullPublishDate = new Date(article.published_at).toLocaleString(
    undefined,
    {
      dateStyle: "full",
      timeStyle: "medium",
    },
  );
  return (
    <Link
      href={`/blog/${article.slug}`}
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
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              {article.user.profile_image_90 && (
                <Image
                  src={article.user.profile_image_90}
                  alt={article.user.name ?? ""}
                  height={40}
                  width={40}
                  className="rounded-full"
                />
              )}
              <div>
                <h6 className="text-lg font-medium">{article.user.name}</h6>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {article.reading_time_minutes} min read
                </span>
              </div>
            </div>
            <p
              className="text-gray-500 dark:text-gray-400 text-end"
              title={fullPublishDate}
            >
              {publishedAt}
            </p>
          </div>
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
