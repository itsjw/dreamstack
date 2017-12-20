import { KolConfig } from 'app/services/mainframe';

/** key to retrieve the collection form the db intialize object */
const RECIEPT_NAME = 'receipt';

/**
 * student payments record stored in the database's interface
 *
 * @export
 * @interface ReceiptKoll
 */
export interface ReceiptKoll {
    name: string;
    date: string | Date;
    amount: number;
    teacherId: string;
    teacherName: string;
    studentId: string;
    universalId: string;
    session: string;
    term: string;
    class: string;
    createdAt: Date;
    updatedAt: Date;
    school: string;
}

/**
 * the student's payment receipt schema configuration and properties
 */
const receiptSchema = {
    title: 'User Receipt Schema',
    version: 0,
    description: 'stores users payments receipt schema',
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
        date: {
            type: 'string',
            final: true
        },
        amount: {
            type: 'number',
            final: true
        },
        teacherId: {
            type: 'string',
            final: true
        },
        teacherName: {
            type: 'string',
            final: true
        },
        studentId: {
            type: 'string',
            final: true
        },
        universalId: {
            type: 'string',
            final: true
        },
        session: {
            type: 'string',
            final: true
        },
        term: {
            type: 'string',
            final: true
        },
        class: {
            type: 'string',
            final: true
        },
        createdAt: {
            type: 'string',
            final: true
        },
        updatedAt: {
            type: 'string'
        },
        school: {
            ref: 'school',
            type: 'string',
            final: true
        }
    },
    required: ['school']
};

export const receiptModel: KolConfig<typeof receiptSchema> = {
    name: RECIEPT_NAME,
    schema: receiptSchema
};
