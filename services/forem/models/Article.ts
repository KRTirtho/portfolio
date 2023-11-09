/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Representation of an Article to be created/updated
 */
export type Article = {
    article?: {
        title?: string;
        body_markdown?: string;
        published?: boolean;
        series?: string | null;
        main_image?: string | null;
        canonical_url?: string | null;
        description?: string;
        tags?: string;
        organization_id?: number | null;
    };
};

