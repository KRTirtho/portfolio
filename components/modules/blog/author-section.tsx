"use client";

import { ArticleIndex } from "@/services/forem";
import { formatDistanceStrict } from "date-fns";
import Image from "next/image";
import React, { FC, useMemo } from "react";

const AuthorSection: FC<{ article: ArticleIndex }> = ({ article }) => {
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
  );
};

export default AuthorSection;
