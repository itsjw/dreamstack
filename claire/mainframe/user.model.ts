import { KolConfig } from 'app/services/mainframe';

/** key to retrieve the collection form the db intialize object */
const USER_NAME = 'user';

/**
 * teachers biodata information recored stored in the database's interface
 *
 * @export
 * @interface UserKoll
 */
export interface UserKoll {
    name: string;
    gender: string;
    phoneNo: string | number;
    class: string;
    subject: string;
    phoneNos: string;
    address: string;
    image: File | string;
    email?: string;
    level: string;
    authId: string;
    school: string;
  }

/**
 * subject record information and schema
 */
const userSchema = {
    title: 'Admin Schema',
    version: 0,
    description: 'stores various users biodata',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            primary: true
        },
        name: {
            type: 'string'
        },
        gender: {
            type: 'string'
        },
        class: {
            type: 'string',
            default: 'none'
        },
        subject: {
            type: 'string',
            default: 'none'
        },
        phoneNos: {
            type: 'string'
        },
        address: {
            type: 'string'
        },
        image: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        authId: {
            ref: 'auth',
            type: 'string',
            final: true
        },
        school: {
            ref: 'school',
            type: 'string',
            final: true
        }
    },
    required: ['name', 'gender', 'address',
        'email', 'authId', 'school']
};

export const userModel: KolConfig<typeof userSchema> = {
    name: USER_NAME,
    schema: userSchema
}
