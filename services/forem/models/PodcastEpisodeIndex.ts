/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SharedPodcast } from './SharedPodcast';

/**
 * Representation of a podcast episode returned in a list
 */
export type PodcastEpisodeIndex = {
    type_of: string;
    id: number;
    class_name: string;
    path: string;
    title: string;
    /**
     * Podcast episode image url or podcast image url
     */
    image_url: string;
    podcast: SharedPodcast;
};

