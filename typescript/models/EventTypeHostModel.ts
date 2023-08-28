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

import { EventTypeHostCalendarModel } from '../models/EventTypeHostCalendarModel';
import { HttpFile } from '../http/http';

export class EventTypeHostModel {
    'id': string;
    'email': string;
    'role': EventTypeHostModelRoleEnum;
    'calendars': Set<EventTypeHostCalendarModel>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "EventTypeHostModelRoleEnum",
            "format": ""
        },
        {
            "name": "calendars",
            "baseName": "calendars",
            "type": "Set<EventTypeHostCalendarModel>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EventTypeHostModel.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum EventTypeHostModelRoleEnum {
    Owner = 'OWNER',
    Collaborator = 'COLLABORATOR'
}

