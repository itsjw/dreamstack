import { KolConfig } from 'app/services/mainframe';

/** key to retrieve the collection form the db intialize object */
const SCHOOL_NAME = 'school';

/**
 * School biodata record stored in the database's interface
 *
 * @export
 * @interface SchoolKoll
 */
export interface SchoolKoll {
    name: string;
    email: string;
    description: string;
    category: string;
    address: string;
    town: string;
    state: string;
}


/**
 * the student biodata schema configuration and properties
 */
const schoolSchema = {
    title: 'School BioData Schema',
    version: 0,
    description: 'stores the school biodata information',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            primary: true
        },
        name: {
            type: 'string',
            unique: true,
            final: true
        },
        email: {
            type: 'string'
        },
        description: {
            type: 'string'
        },
        category: {
            type: 'string'
        },
        address: {
            type: 'string'
        },
        town: {
            type: 'string'
        },
        state: {
            type: 'string'
        }
    },
    required: ['name', 'description', 'address',
        'category', 'town', 'state']
};

export const schoolModel: KolConfig<typeof schoolSchema> = {
    name: SCHOOL_NAME,
    schema: schoolSchema
}
