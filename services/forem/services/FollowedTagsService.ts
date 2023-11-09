/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FollowedTag } from '../models/FollowedTag';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FollowedTagsService {

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

}
