/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VideoArticle } from '../models/VideoArticle';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VideosService {

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
            method: 'GET',
            url: '/api/videos',
            query: {
                'page': page,
                'per_page': perPage,
            },
        });
    }

}
