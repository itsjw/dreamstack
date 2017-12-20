import { KolConfig } from 'app/services/mainframe';

/** key to retrieve the collection form the db intialize object */
const PARENT_NAME = 'parent';

/**
 * student biodata's record stored in the database's interface
 *
 * @export
 * @interface ParentKoll
 */
export interface ParentKoll {
    phoneNo: number;
    name: string;
    relationship: string;
    homeAddress: string;
    workAddress?: string;
    email?: string;
    profession: string;
    workcategory: string;
    town: string;
    state: string;
    school: string;
  }

/**
 * the student's parent biodata schema configuration and properties
 */
const parentSchema = {
    title: 'Student Parent Schema',
    version: 0,
    description: 'stores student parents biodata information',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            primary: true
        },
        phoneNo: {
            type: 'string',
            unique: true,
            final: true
        },
        name: {
            type: 'string'
        },
        relationship: {
            type: 'string'
        },
        homeAddress: {
            type: 'string'
        },
        workAddress: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        profession: {
            type: 'string'
        },
        workcategory: {
            type: 'string'
        },
        town: {
            type: 'string'
        },
        state: {
            type: 'string'
        },
        school: {
            ref: 'school',
            type: 'string',
            final: true
        }
    },
    required: ['phoneNo', 'name', 'relationship',
     'homeAddress', 'town', 'state', 'school' ]
};

export const parentModel: KolConfig<typeof parentSchema> = {
    name: PARENT_NAME,
    schema: parentSchema
}
