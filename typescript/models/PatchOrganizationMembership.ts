/**
 * timetime
 * timetime API
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class PatchOrganizationMembership {
    'roles': Set<PatchOrganizationMembershipRolesEnum>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Set<PatchOrganizationMembershipRolesEnum>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PatchOrganizationMembership.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PatchOrganizationMembershipRolesEnum {
    Member = 'MEMBER',
    Admin = 'ADMIN'
}

