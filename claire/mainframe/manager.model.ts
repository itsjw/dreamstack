import { KolConfig } from 'app/services/mainframe';

/** key to retrieve the collection form the db intialize object */
const MANAGER_NAME = 'manager';

/**
 * school managers biodata's record stored in the database's interface
 *
 * @export
 * @interface ManagerKoll
 */
export interface ManagerKoll {
    propName: string;
    propPhone: string;
    propEmail: string;
    sMName: string;
    sMPhone: string;
    sMEmail: string;
    motto: string;
    school: string;
}

/**
 * the school managers biodata schema configuration and properties
 */
const managerSchema = {
    title: 'School Management contact and information Schema',
    version: 0,
    description:  `
    stores the school managerial information like pricncipal
    and properiotes name and contact`,
    type: 'object',
    properties: {
        id: {
            type: 'string',
            primary: true
        },
        propName: {
            type: 'string',
            unique: true,
            final: true
        },
        propPhone: {
            type: 'string'
        },
        propEmail: {
            type: 'string'
        },
        sMName: {
            type: 'string'
        },
        sMPhone: {
            type: 'string'
        },
        sMEmail: {
            type: 'string'
        },
        motto: {
            type: 'string'
        },
        school: {
            ref: 'school',
            type: 'string',
            final: true
        }
    },
    required: ['propName', 'propPhone', 'sMName',
        'sMPhone', 'motto', 'school' ]
};

export const managerModel: KolConfig<typeof managerSchema> = {
    name: MANAGER_NAME,
    schema: managerSchema
}
