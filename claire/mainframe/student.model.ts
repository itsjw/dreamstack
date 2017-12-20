import { KolConfig } from 'app/services/mainframe';

/** key to retrieve the collection form the db intialize object */
const STUDENT_NAME = 'student';

/**
 * student biodata information recored stored in the database's interface
 *
 * @export
 * @interface StudentKoll
 */
export interface StudentKoll {
    id: string;
    name: string;
    class: string,
    gender: string;
    dob: string;
    bloodgroup?: string;
    prevschool?: string;
    parentPhone: number;
    school: string;
}

/**
 * the student biodata schema configuration and properties
 */
const studentSchema = {
    title: 'Student Schema',
    version: 0,
    description: 'stores student biodata records',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            primary: true
        },
        name: {
            type: 'string'
        },
        class: {
            type: 'string'
        },
        gender: {
            type: 'string'
        },
        dob: {
            type: 'string'
        },
        bloodgroup: {
            type: 'string'
        },
        prevschool: {
            type: 'string'
        },
        parentPhone: {
            ref: 'parent',
            type: 'string',
            final: true
        },
        school: {
            ref: 'school',
            type: 'string',
            final: true
        }
    },
    required: ['name', 'class', 'dob',
        'gender', 'parentPhone', 'school']
};

export const studentModel: KolConfig<typeof studentSchema> = {
    name: STUDENT_NAME,
    schema: studentSchema
}
