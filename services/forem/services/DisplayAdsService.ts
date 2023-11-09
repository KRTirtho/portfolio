/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DisplayAd } from '../models/DisplayAd';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DisplayAdsService {

    /**
     * display ads
     * This endpoint allows the client to retrieve a list of all display ads.
     * @returns DisplayAd successful
     * @throws ApiError
     */
    public static getApiDisplayAds(): CancelablePromise<Array<DisplayAd>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/display_ads',
            errors: {
                401: `unauthorized`,
            },
        });
    }

    /**
     * display ads
     * This endpoint allows the client to create a new display ad.
     * @param requestBody
     * @returns any successful
     * @throws ApiError
     */
    public static postApiDisplayAds(
        requestBody?: Record<string, any>,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/display_ads',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `unauthorized`,
                422: `unprocessable`,
            },
        });
    }

    /**
     * display ad
     * This endpoint allows the client to retrieve a single display ad, via its id.
     * @param id The ID of the display ad.
     * @returns any successful
     * @throws ApiError
     */
    public static getApiDisplayAds1(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/display_ads/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `unauthorized`,
                404: `Unknown DisplayAd ID`,
            },
        });
    }

    /**
     * display ads
     * This endpoint allows the client to update the attributes of a single display ad, via its id.
     * @param id The ID of the display ad.
     * @param requestBody
     * @returns any successful
     * @throws ApiError
     */
    public static putApiDisplayAds(
        id: number,
        requestBody?: Record<string, any>,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/display_ads/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `unauthorized`,
                404: `not found`,
            },
        });
    }

    /**
     * unpublish
     * This endpoint allows the client to remove a display ad from rotation by un-publishing it.
     * @param id The ID of the display ad to unpublish.
     * @returns void
     * @throws ApiError
     */
    public static putApiDisplayAdsUnpublish(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/display_ads/{id}/unpublish',
            path: {
                'id': id,
            },
            errors: {
                401: `unauthorized`,
                404: `not found`,
            },
        });
    }

}
