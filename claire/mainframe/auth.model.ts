import { KolConfig } from 'app/services/mainframe';

/** key to retrieve the collection form the db intialize object */
const AUTH_NAME = 'auth';

/**
 * program users authorization record stored in the database's interface
 *
 * @export
 * @interface AuthKoll
 */
export interface AuthKoll {
    username: string;
    password: string;
    level: string;
    school: string;
}

/**
 * the student biodata schema configuration and properties
 */
const authSchema = {
    title: 'User Authorization Schema',
    version: 0,
    description: 'stores users authorization info and level',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            primary: true
        },
        username: {
            type: 'string',
            final: true
        },
        password: {
            type: 'string'
        },
        level: {
            type: 'string'
        },
        school: {
            ref: 'school',
            type: 'string',
            final: true
        }
    },
    required: ['username', 'password', 'level', 'school' ]
};

export const authModel: KolConfig<typeof authSchema> = {
    name: AUTH_NAME,
    schema: authSchema
}
