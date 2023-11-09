/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArticleIndex } from '../models/ArticleIndex';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OrganizationsService {

    /**
     * An organization
     * This endpoint allows the client to retrieve a single organization by their username
     * @param username
     * @returns any An Organization
     * @throws ApiError
     */
    public static getOrganization(
        username: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/organizations/{username}',
            path: {
                'username': username,
            },
            errors: {
                404: `Not Found`,
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
            method: 'GET',
            url: '/api/organizations/{username}/articles',
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

}
