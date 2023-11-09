/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArticleIndex } from '../models/ArticleIndex';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReadinglistService {

    /**
     * Readinglist
     * This endpoint allows the client to retrieve a list of articles that were saved to a Users readinglist.
     * It supports pagination, each page will contain `30` articles by default
     * @param page Pagination page
     * @param perPage Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
     * @returns ArticleIndex A list of articles in the users readinglist
     * @throws ApiError
     */
    public static getReadinglist(
        page: number = 1,
        perPage: number = 30,
    ): CancelablePromise<Array<ArticleIndex>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/readinglist',
            query: {
                'page': page,
                'per_page': perPage,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}
