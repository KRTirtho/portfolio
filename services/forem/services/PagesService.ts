/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page } from '../models/Page';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PagesService {

    /**
     * show details for all pages
     * This endpoint allows the client to retrieve details for all Page objects.
     * @returns Page successful
     * @throws ApiError
     */
    public static getApiPages(): CancelablePromise<Array<Page>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pages',
        });
    }

    /**
     * pages
     * This endpoint allows the client to create a new page.
     * @param requestBody
     * @returns any successful
     * @throws ApiError
     */
    public static postApiPages(
        requestBody?: {
            /**
             * Title of the page
             */
            title?: string;
            /**
             * Used to link to this page in URLs, must be unique and URL-safe
             */
            slug?: string;
            /**
             * For internal use, helps similar pages from one another
             */
            description?: string;
            /**
             * The text (in markdown) of the ad (required)
             */
            body_markdown?: string;
            /**
             * For JSON pages, the JSON body
             */
            body_json?: string;
            /**
             * If true, the page is available at '/{slug}' instead of '/page/{slug}', use with caution
             */
            is_top_level_path?: boolean;
            /**
             * Controls what kind of layout the page is rendered in
             */
            template?: 'contained' | 'full_within_layout' | 'nav_bar_included' | 'json';
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/pages',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `unauthorized`,
                422: `unprocessable`,
            },
        });
    }

    /**
     * show details for a page
     * This endpoint allows the client to retrieve details for a single Page object, specified by ID.
     * @param id The ID of the page.
     * @returns Page successful
     * @throws ApiError
     */
    public static getApiPages1(
        id: number,
    ): CancelablePromise<Page> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pages/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * update details for a page
     * This endpoint allows the client to retrieve details for a single Page object, specified by ID.
     * @param id The ID of the page.
     * @param requestBody
     * @returns Page successful
     * @throws ApiError
     */
    public static putApiPages(
        id: number,
        requestBody?: Page,
    ): CancelablePromise<Page> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/pages/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `unauthorized`,
                422: `unprocessable`,
            },
        });
    }

    /**
     * remove a page
     * This endpoint allows the client to delete a single Page object, specified by ID.
     * @param id The ID of the page.
     * @returns Page successful
     * @throws ApiError
     */
    public static deleteApiPages(
        id: number,
    ): CancelablePromise<Page> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/pages/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `unauthorized`,
                422: `unprocessable`,
            },
        });
    }

}
