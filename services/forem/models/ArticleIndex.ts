/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArticleFlareTag } from './ArticleFlareTag';
import type { SharedOrganization } from './SharedOrganization';
import type { SharedUser } from './SharedUser';

/**
 * Representation of an article or post returned in a list
 */
export type ArticleIndex = {
    type_of: string;
    id: number;
    title: string;
    description: string;
    cover_image: string | null;
    readable_publish_date: string;
    social_image: string;
    tag_list: Array<string>;
    tags: string;
    slug: string;
    path: string;
    url: string;
    canonical_url: string;
    positive_reactions_count: number;
    public_reactions_count: number;
    created_at: string;
    edited_at: string | null;
    crossposted_at: string | null;
    published_at: string;
    last_comment_at: string;
    /**
     * Crossposting or published date time
     */
    published_timestamp: string;
    /**
     * Reading time, in minutes
     */
    reading_time_minutes: number;
    user: SharedUser;
    flare_tag?: ArticleFlareTag;
    organization?: SharedOrganization;
};

