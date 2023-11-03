import { Octokit, RestEndpointMethodTypes } from "@octokit/rest";

export const octokit = new Octokit();

export type GhRepo =
  RestEndpointMethodTypes["repos"]["get"]["response"]["data"];
