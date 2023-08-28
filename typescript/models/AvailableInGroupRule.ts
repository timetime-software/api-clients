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

import { ResourceGroupId } from '../models/ResourceGroupId';
import { HttpFile } from '../http/http';

export class AvailableInGroupRule {
    'group': ResourceGroupId;
    'min': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "group",
            "baseName": "group",
            "type": "ResourceGroupId",
            "format": ""
        },
        {
            "name": "min",
            "baseName": "min",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return AvailableInGroupRule.attributeTypeMap;
    }

    public constructor() {
    }
}

