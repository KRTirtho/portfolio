/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArticleIndex } from '../models/ArticleIndex';
import type { User } from '../models/User';
import type { UserInviteParam } from '../models/UserInviteParam';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

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
            method: 'GET',
            url: '/api/articles/me',
            query: {
                'page': page,
                'per_page': perPage,
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
            method: 'GET',
            url: '/api/articles/me/published',
            query: {
                'page': page,
                'per_page': perPage,
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
            method: 'GET',
            url: '/api/articles/me/unpublished',
            query: {
                'page': page,
                'per_page': perPage,
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
            method: 'GET',
            url: '/api/articles/me/all',
            query: {
                'page': page,
                'per_page': perPage,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Organization's users
     * This endpoint allows the client to retrieve a list of users belonging to the organization
     *
     * It supports pagination, each page will contain `30` users by default.
     * @param username
     * @param page Pagination page
     * @param perPage Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
     * @returns User An Organization's users
     * @throws ApiError
     */
    public static getOrgUsers(
        username: string,
        page: number = 1,
        perPage: number = 30,
    ): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/organizations/{username}/users',
            path: {
                'username': username,
            },
            query: {
                'page': page,
                'per_page': perPage,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * The authenticated user
     * This endpoint allows the client to retrieve information about the authenticated user
     * @returns any successful
     * @throws ApiError
     */
    public static getUserMe(): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users/me',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * A User
     * This endpoint allows the client to retrieve a single user, either by id
     * or by the user's username.
     *
     * For complete documentation, see the v0 API docs: https://developers.forem.com/api/v0#tag/users/operation/getUser
     * @param id
     * @returns any successful
     * @throws ApiError
     */
    public static getUser(
        id: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Unpublish a User's Articles and Comments
     * This endpoint allows the client to unpublish all of the articles and
     * comments created by a user.
     *
     * The user associated with the API key must have any 'admin' or 'moderator' role.
     *
     * This specified user's articles and comments will be unpublished and will no longer be
     * visible to the public. They will remain in the database and will set back to draft status
     * on the specified user's  dashboard. Any notifications associated with the specified user's
     * articles and comments will be deleted.
     *
     * Note this endpoint unpublishes articles and comments asychronously: it will return a 204 NO CONTENT
     * status code immediately, but the articles and comments will not be unpublished until the
     * request is completed on the server.
     * @param id The ID of the user to unpublish.
     * @returns void
     * @throws ApiError
     */
    public static unpublishUser(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/users/{id}/unpublish',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                404: `Unknown User ID (still accepted for async processing)`,
            },
        });
    }

    /**
     * Suspend a User
     * This endpoint allows the client to suspend a user.
     *
     * The user associated with the API key must have any 'admin' or 'moderator' role.
     *
     * This specified user will be assigned the 'suspended' role. Suspending a user will stop the
     * user from posting new posts and comments. It doesn't delete any of the user's content, just
     * prevents them from creating new content while suspended. Users are not notified of their suspension
     * in the UI, so if you want them to know about this, you must notify them.
     * @param id The ID of the user to suspend.
     * @returns void
     * @throws ApiError
     */
    public static suspendUser(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/users/{id}/suspend',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                404: `Unknown User ID`,
            },
        });
    }

    /**
     * Invite a User
     * This endpoint allows the client to trigger an invitation to the provided email address.
     *
     * It requires a token from a user with `super_admin` privileges.
     * @param requestBody
     * @returns any Successful
     * @throws ApiError
     */
    public static postAdminUsersCreate(
        requestBody?: UserInviteParam,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/admin/users',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable Entity`,
            },
        });
    }

}
