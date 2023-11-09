/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Representation of a page object
 */
export type Page = {
    /**
     * Title of the page
     */
    title: string;
    /**
     * Used to link to this page in URLs, must be unique and URL-safe
     */
    slug: string;
    /**
     * For internal use, helps similar pages from one another
     */
    description: string;
    /**
     * The text (in markdown) of the ad (required)
     */
    body_markdown?: string | null;
    /**
     * For JSON pages, the JSON body
     */
    body_json?: string | null;
    /**
     * If true, the page is available at '/{slug}' instead of '/page/{slug}', use with caution
     */
    is_top_level_path?: boolean;
    social_image?: Record<string, any> | null;
    /**
     * Controls what kind of layout the page is rendered in
     */
    template: Page.template;
};

export namespace Page {

    /**
     * Controls what kind of layout the page is rendered in
     */
    export enum template {
        CONTAINED = 'contained',
        FULL_WITHIN_LAYOUT = 'full_within_layout',
        NAV_BAR_INCLUDED = 'nav_bar_included',
        JSON = 'json',
    }


}

