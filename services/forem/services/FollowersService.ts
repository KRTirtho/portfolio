/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FollowersService {

    /**
     * Followers
     * This endpoint allows the client to retrieve a list of the followers they have.
     * "Followers" are users that are following other users on the website.
     * It supports pagination, each page will contain 80 followers by default.
     * @param page Pagination page
     * @param perPage Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
     * @param sort Default is 'created_at'. Specifies the sort order for the created_at param of the follow
     * relationship. To sort by newest followers first (descending order) specify
     * ?sort=-created_at.
     * @returns any A List of followers
     * @throws ApiError
     */
    public static getFollowers(
        page: number = 1,
        perPage: number = 30,
        sort?: string,
    ): CancelablePromise<Array<{
        /**
         * user_follower by default
         */
        type_of?: string;
        id?: number;
        /**
         * The follower's user id
         */
        user_id?: number;
        /**
         * The follower's name
         */
        name?: string;
        /**
         * A path to the follower's profile
         */
        path?: string;
        /**
         * Profile image (640x640)
         */
        profile_image?: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/followers/users',
            query: {
                'page': page,
                'per_page': perPage,
                'sort': sort,
            },
            errors: {
                401: `unauthorized`,
            },
        });
    }

}
