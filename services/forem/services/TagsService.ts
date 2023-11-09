/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FollowedTag } from '../models/FollowedTag';
import type { Tag } from '../models/Tag';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TagsService {

    /**
     * Followed Tags
     * This endpoint allows the client to retrieve a list of the tags they follow.
     * @returns FollowedTag A List of followed tags
     * @throws ApiError
     */
    public static getFollowedTags(): CancelablePromise<Array<FollowedTag>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/follows/tags',
            errors: {
                401: `unauthorized`,
            },
        });
    }

    /**
     * Tags
     * This endpoint allows the client to retrieve a list of tags that can be used to tag articles.
     *
     * It will return tags ordered by popularity.
     *
     * It supports pagination, each page will contain 10 tags by default.
     * @param page Pagination page
     * @param perPage Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
     * @returns Tag A List of all tags
     * @throws ApiError
     */
    public static getTags(
        page: number = 1,
        perPage: number = 10,
    ): CancelablePromise<Array<Tag>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/tags',
            query: {
                'page': page,
                'per_page': perPage,
            },
        });
    }

}
