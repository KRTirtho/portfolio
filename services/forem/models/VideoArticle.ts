/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Representation of an Article with video
 */
export type VideoArticle = {
    type_of?: string;
    id?: number;
    path?: string;
    cloudinary_video_url?: string;
    title?: string;
    user_id?: number;
    video_duration_in_minutes?: string;
    video_source_url?: string;
    /**
     * Author of the article
     */
    user?: {
        name?: string;
    };
};

