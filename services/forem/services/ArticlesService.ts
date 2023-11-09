/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Article } from "../models/Article";
import type { ArticleIndex } from "../models/ArticleIndex";
import type { VideoArticle } from "../models/VideoArticle";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class ArticlesService {
  /**
   * Publish article
   * This endpoint allows the client to create a new article.
   *
   * "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.
   * @param requestBody
   * @returns any An Article
   * @throws ApiError
   */
  public static createArticle(requestBody?: Article): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/articles",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }

  /**
   * Published articles
   * This endpoint allows the client to retrieve a list of articles.
   *
   * "Articles" are all the posts that users create on DEV that typically
   * show up in the feed. They can be a blog post, a discussion question,
   * a help thread etc. but is referred to as article within the code.
   *
   * By default it will return featured, published articles ordered
   * by descending popularity.
   *
   * It supports pagination, each page will contain `30` articles by default.
   * @param page Pagination page
   * @param perPage Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
   * @param tag Using this parameter will retrieve articles that contain the requested tag. Articles
   * will be ordered by descending popularity.This parameter can be used in conjuction with `top`.
   * @param tags Using this parameter will retrieve articles with any of the comma-separated tags.
   * Articles will be ordered by descending popularity.
   * @param tagsExclude Using this parameter will retrieve articles that do _not_ contain _any_
   * of comma-separated tags. Articles will be ordered by descending popularity.
   * @param username Using this parameter will retrieve articles belonging
   * to a User or Organization ordered by descending publication date.
   * If `state=all` the number of items returned will be `1000` instead of the default `30`.
   * This parameter can be used in conjuction with `state`.
   * @param state Using this parameter will allow the client to check which articles are fresh or rising.
   * If `state=fresh` the server will return fresh articles.
   * If `state=rising` the server will return rising articles.
   * This param can be used in conjuction with `username`, only if set to `all`.
   * @param top Using this parameter will allow the client to return the most popular articles
   * in the last `N` days.
   * `top` indicates the number of days since publication of the articles returned.
   * This param can be used in conjuction with `tag`.
   * @param collectionId Adding this will allow the client to return the list of articles
   * belonging to the requested collection, ordered by ascending publication date.
   * @returns ArticleIndex A List of Articles
   * @throws ApiError
   */
  public static getArticles(
    page: number = 1,
    perPage: number = 30,
    tag?: string,
    tags?: string,
    tagsExclude?: string,
    username?: string,
    state?: "fresh" | "rising" | "all",
    top?: number,
    collectionId?: number,
  ): CancelablePromise<Array<ArticleIndex>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/articles",
      query: {
        page: page,
        per_page: perPage,
        tag: tag,
        tags: tags,
        tags_exclude: tagsExclude,
        username: username,
        state: state,
        top: top,
        collection_id: collectionId,
      },
    });
  }

  /**
   * Published articles sorted by published date
   * This endpoint allows the client to retrieve a list of articles. ordered by descending publish date.
   *
   * It supports pagination, each page will contain 30 articles by default.
   * @param page Pagination page
   * @param perPage Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
   * @returns ArticleIndex A List of Articles
   * @throws ApiError
   */
  public static getLatestArticles(
    page: number = 1,
    perPage: number = 30,
  ): CancelablePromise<Array<ArticleIndex>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/articles/latest",
      query: {
        page: page,
        per_page: perPage,
      },
    });
  }

  /**
   * Published article by id
   * This endpoint allows the client to retrieve a single published article given its `id`.
   * @param id
   * @returns any An Article
   * @throws ApiError
   */
  public static getArticleById(
    id: number,
  ): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/articles/{id}",
      path: {
        id: id,
      },
      errors: {
        404: `Article Not Found`,
      },
    });
  }

  /**
   * Update an article by id
   * This endpoint allows the client to update an existing article.
   *
   * "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.
   * @param id The ID of the user to unpublish.
   * @param requestBody
   * @returns any An Article
   * @throws ApiError
   */
  public static updateArticle(
    id: number,
    requestBody?: Article,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/articles/{id}",
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Unauthorized`,
        404: `Article Not Found`,
        422: `Unprocessable Entity`,
      },
    });
  }

  /**
   * Published article by path
   * This endpoint allows the client to retrieve a single published article given its `path`.
   * @param username
   * @param slug
   * @returns any An Article
   * @throws ApiError
   */
  public static getArticleByPath(
    username: string,
    slug: string,
  ): CancelablePromise<Required<Required<Article>["article"]> & ArticleIndex> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/articles/{username}/{slug}",
      path: {
        username: username,
        slug: slug,
      },
      errors: {
        404: `Article Not Found`,
      },
    });
  }

  /**
   * User's articles
   * This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.
   *
   * "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.
   *
   * Published articles will be in reverse chronological publication order.
   *
   * It will return published articles with pagination. By default a page will contain 30 articles.
   * @param page Pagination page
   * @param perPage Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
   * @returns ArticleIndex A List of the authenticated user's Articles
   * @throws ApiError
   */
  public static getUserArticles(
    page: number = 1,
    perPage: number = 30,
  ): CancelablePromise<Array<ArticleIndex>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/articles/me",
      query: {
        page: page,
        per_page: perPage,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * User's published articles
   * This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.
   *
   * "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.
   *
   * Published articles will be in reverse chronological publication order.
   *
   * It will return published articles with pagination. By default a page will contain 30 articles.
   * @param page Pagination page
   * @param perPage Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
   * @returns ArticleIndex A List of the authenticated user's Articles
   * @throws ApiError
   */
  public static getUserPublishedArticles(
    page: number = 1,
    perPage: number = 30,
  ): CancelablePromise<Array<ArticleIndex>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/articles/me/published",
      query: {
        page: page,
        per_page: perPage,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * User's unpublished articles
   * This endpoint allows the client to retrieve a list of unpublished articles on behalf of an authenticated user.
   *
   * "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.
   *
   * Unpublished articles will be in reverse chronological creation order.
   *
   * It will return unpublished articles with pagination. By default a page will contain 30 articles.
   * @param page Pagination page
   * @param perPage Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
   * @returns ArticleIndex A List of the authenticated user's Articles
   * @throws ApiError
   */
  public static getUserUnpublishedArticles(
    page: number = 1,
    perPage: number = 30,
  ): CancelablePromise<Array<ArticleIndex>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/articles/me/unpublished",
      query: {
        page: page,
        per_page: perPage,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * User's all articles
   * This endpoint allows the client to retrieve a list of all articles on behalf of an authenticated user.
   *
   * "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.
   *
   * It will return both published and unpublished articles with pagination.
   *
   * Unpublished articles will be at the top of the list in reverse chronological creation order. Published articles will follow in reverse chronological publication order.
   *
   * By default a page will contain 30 articles.
   * @param page Pagination page
   * @param perPage Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
   * @returns ArticleIndex A List of the authenticated user's Articles
   * @throws ApiError
   */
  public static getUserAllArticles(
    page: number = 1,
    perPage: number = 30,
  ): CancelablePromise<Array<ArticleIndex>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/articles/me/all",
      query: {
        page: page,
        per_page: perPage,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * Unpublish an article
   * This endpoint allows the client to unpublish an article.
   *
   * The user associated with the API key must have any 'admin' or 'moderator' role.
   *
   * The article will be unpublished and will no longer be visible to the public. It will remain
   * in the database and will set back to draft status on the author's posts dashboard. Any
   * notifications associated with the article will be deleted. Any comments on the article
   * will remain.
   * @param id The ID of the article to unpublish.
   * @param note Content for the note that's created along with unpublishing
   * @returns void
   * @throws ApiError
   */
  public static unpublishArticle(
    id: number,
    note?: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/articles/{id}/unpublish",
      path: {
        id: id,
      },
      query: {
        note: note,
      },
      errors: {
        401: `Unauthorized`,
        404: `Article Not Found`,
      },
    });
  }

  /**
   * Organization's Articles
   * This endpoint allows the client to retrieve a list of Articles belonging to the organization
   *
   * It supports pagination, each page will contain `30` users by default.
   * @param username
   * @param page Pagination page
   * @param perPage Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
   * @returns ArticleIndex An Organization's Articles
   * @throws ApiError
   */
  public static getOrgArticles(
    username: string,
    page: number = 1,
    perPage: number = 30,
  ): CancelablePromise<Array<ArticleIndex>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/organizations/{username}/articles",
      path: {
        username: username,
      },
      query: {
        page: page,
        per_page: perPage,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }

  /**
   * Articles with a video
   * This endpoint allows the client to retrieve a list of articles that are uploaded with a video.
   *
   * It will only return published video articles ordered by descending popularity.
   *
   * It supports pagination, each page will contain 24 articles by default.
   * @param page Pagination page
   * @param perPage Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
   * @returns VideoArticle A List of all articles with videos
   * @throws ApiError
   */
  public static videos(
    page: number = 1,
    perPage: number = 24,
  ): CancelablePromise<Array<VideoArticle>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/videos",
      query: {
        page: page,
        per_page: perPage,
      },
    });
  }
}
