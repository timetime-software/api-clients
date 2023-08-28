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

export class EventTypeHostCalendarModel {
    'id': string;
    'name': string;
    'description'?: string;
    'provider': string;
    'account': string;
    'primary': boolean;
    'readOnly': boolean;
    'syncBookings': boolean;
    'verifyAvailability': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "string",
            "format": ""
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "string",
            "format": ""
        },
        {
            "name": "primary",
            "baseName": "primary",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "syncBookings",
            "baseName": "syncBookings",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "verifyAvailability",
            "baseName": "verifyAvailability",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EventTypeHostCalendarModel.attributeTypeMap;
    }

    public constructor() {
    }
}

