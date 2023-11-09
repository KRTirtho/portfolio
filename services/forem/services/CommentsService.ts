/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Comment } from '../models/Comment';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CommentsService {

    /**
     * Comments
     * This endpoint allows the client to retrieve all comments belonging to an article or podcast episode as threaded conversations.
     *
     * It will return the all top level comments with their nested comments as threads. See the format specification for further details.
     * @param aId Article identifier.
     * @param pId Podcast Episode identifier.
     * @returns Comment A List of Comments
     * @throws ApiError
     */
    public static getCommentsByArticleId(
        aId?: string,
        pId?: string,
    ): CancelablePromise<Array<Comment>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/comments',
            query: {
                'a_id': aId,
                'p_id': pId,
            },
            errors: {
                404: `Resource Not Found`,
            },
        });
    }

    /**
     * Comment by id
     * This endpoint allows the client to retrieve a comment as well as his descendants comments.
     *
     * It will return the required comment (the root) with its nested descendants as a thread.
     *
     * See the format specification for further details.
     * @param id Comment identifier.
     * @returns any A List of the Comments
     * @throws ApiError
     */
    public static getCommentById(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/comments/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Comment Not Found`,
            },
        });
    }

}
