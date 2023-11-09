/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProfileImagesService {

    /**
     * A Users or organizations profile image
     * This endpoint allows the client to retrieve a user or organization profile image information by its
     * corresponding username.
     * @param username The parameter is the username of the user or the username of the organization.
     * @returns any An object containing profile image details
     * @throws ApiError
     */
    public static getProfileImage(
        username: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/profile_images/{username}',
            path: {
                'username': username,
            },
            errors: {
                404: `Resource Not Found`,
            },
        });
    }

}
