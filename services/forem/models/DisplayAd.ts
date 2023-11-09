/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A Display Ad, aka Billboard, aka Widget
 */
export type DisplayAd = {
    /**
     * The ID of the Display Ad
     */
    id?: number;
    /**
     * For internal use, helps distinguish ads from one another
     */
    name: string;
    /**
     * The text (in markdown) of the ad (required)
     */
    body_markdown: string;
    /**
     * Ad must be both published and approved to be in rotation
     */
    approved?: boolean;
    /**
     * Ad must be both published and approved to be in rotation
     */
    published?: boolean;
    /**
     * Identifies the organization to which the ad belongs
     */
    organization_id?: number | null;
    /**
     * Identifies the user who created the ad.
     */
    creator_id?: number | null;
    /**
     * Identifies which area of site layout the ad can appear in
     */
    placement_area: DisplayAd.placement_area;
    /**
     * Tags on which this ad can be displayed (blank is all/any tags)
     */
    tag_list?: string;
    /**
     * Articles this ad should *not* appear on (blank means no articles are disallowed, and this ad can appear next to any/all articles). Comma-separated list of integer Article IDs
     */
    article_exclude_ids?: string | null;
    /**
     * Specifies an group of users to show this ad to (only works with logged-in users)
     */
    audience_segment_type?: DisplayAd.audience_segment_type;
    /**
     * Potentially limits visitors to whom the ad is visible
     */
    display_to?: DisplayAd.display_to;
    /**
     * Types of the billboards:
     * in_house (created by admins),
     * community (created by an entity, appears on entity's content),
     * external ( created by an entity, or a non-entity, can appear everywhere)
     *
     */
    type_of?: DisplayAd.type_of;
};

export namespace DisplayAd {

    /**
     * Identifies which area of site layout the ad can appear in
     */
    export enum placement_area {
        SIDEBAR_LEFT = 'sidebar_left',
        SIDEBAR_LEFT_2 = 'sidebar_left_2',
        SIDEBAR_RIGHT = 'sidebar_right',
        FEED_FIRST = 'feed_first',
        FEED_SECOND = 'feed_second',
        FEED_THIRD = 'feed_third',
        POST_SIDEBAR = 'post_sidebar',
        POST_COMMENTS = 'post_comments',
    }

    /**
     * Specifies an group of users to show this ad to (only works with logged-in users)
     */
    export enum audience_segment_type {
        TESTING = 'testing',
        TRUSTED = 'trusted',
        POSTED = 'posted',
        NO_POSTS_YET = 'no_posts_yet',
        DARK_THEME = 'dark_theme',
        LIGHT_THEME = 'light_theme',
        NO_EXPERIENCE = 'no_experience',
        EXPERIENCE1 = 'experience1',
        EXPERIENCE2 = 'experience2',
        EXPERIENCE3 = 'experience3',
        EXPERIENCE4 = 'experience4',
        EXPERIENCE5 = 'experience5',
    }

    /**
     * Potentially limits visitors to whom the ad is visible
     */
    export enum display_to {
        ALL = 'all',
        LOGGED_IN = 'logged_in',
        LOGGED_OUT = 'logged_out',
    }

    /**
     * Types of the billboards:
     * in_house (created by admins),
     * community (created by an entity, appears on entity's content),
     * external ( created by an entity, or a non-entity, can appear everywhere)
     *
     */
    export enum type_of {
        IN_HOUSE = 'in_house',
        COMMUNITY = 'community',
        EXTERNAL = 'external',
    }


}

