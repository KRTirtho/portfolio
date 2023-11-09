/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PodcastEpisodeIndex } from '../models/PodcastEpisodeIndex';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PodcastEpisodesService {

    /**
     * Podcast Episodes
     * This endpoint allows the client to retrieve a list of podcast episodes.
     * "Podcast episodes" are episodes belonging to podcasts.
     * It will only return active (reachable) podcast episodes that belong to published podcasts available on the platform, ordered by descending publication date.
     * It supports pagination, each page will contain 30 articles by default.
     * @param page Pagination page
     * @param perPage Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
     * @param username Using this parameter will retrieve episodes belonging to a specific podcast.
     * @returns PodcastEpisodeIndex A List of Podcast episodes filtered by username
     * @throws ApiError
     */
    public static getPodcastEpisodes(
        page: number = 1,
        perPage: number = 30,
        username?: string,
    ): CancelablePromise<Array<PodcastEpisodeIndex>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/podcast_episodes',
            query: {
                'page': page,
                'per_page': perPage,
                'username': username,
            },
            errors: {
                404: `Unknown Podcast username`,
            },
        });
    }

}
