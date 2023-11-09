/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReactionsService {

    /**
     * toggle reaction
     * This endpoint allows the client to toggle the user's reaction to a specified reactable (eg, Article, Comment, or User). For examples:
     * * "Like"ing an Article will create a new "like" Reaction from the user for that Articles
     * * "Like"ing that Article a second time will remove the "like" from the user
     * @param category
     * @param reactableId
     * @param reactableType
     * @returns any successful
     * @throws ApiError
     */
    public static postApiReactionsToggle(
        category: 'like' | 'unicorn' | 'exploding_head' | 'raised_hands' | 'fire',
        reactableId: number,
        reactableType: 'Comment' | 'Article' | 'User',
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/reactions/toggle',
            query: {
                'category': category,
                'reactable_id': reactableId,
                'reactable_type': reactableType,
            },
            errors: {
                401: `unauthorized`,
            },
        });
    }

    /**
     * create reaction
     * This endpoint allows the client to create a reaction to a specified reactable (eg, Article, Comment, or User). For examples:
     * * "Like"ing an Article will create a new "like" Reaction from the user for that Articles
     * * "Like"ing that Article a second time will return the previous "like"
     * @param category
     * @param reactableId
     * @param reactableType
     * @returns any successful
     * @throws ApiError
     */
    public static postApiReactions(
        category: 'like' | 'unicorn' | 'exploding_head' | 'raised_hands' | 'fire',
        reactableId: number,
        reactableType: 'Comment' | 'Article' | 'User',
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/reactions',
            query: {
                'category': category,
                'reactable_id': reactableId,
                'reactable_type': reactableType,
            },
            errors: {
                401: `unauthorized`,
            },
        });
    }

}
