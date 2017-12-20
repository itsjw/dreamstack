import { KolConfig } from 'app/services/mainframe';

/** key to retrieve the collection form the db intialize object */
const SUBJECT_NAME = 'score';

/**
 * subject records information recored stored in the database's interface
 *
 * @export
 * @interface SubjectKoll
 */
export interface SubjectKoll {
    subject: string;
    teacherId: string;
    class: string;
    session: string;
    term: string;
    firstCa: number;
    secondCa: number;
    exam: number;
    studentId: string;
    school: string;
}

/**
 * subject record information and schema
 */
const subjectSchema = {
    title: 'Subject Schema',
    version: 0,
    description: 'stores student subject records and scores',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            primary: true
        },
        subject: {
            type: 'string',
            final: true
        },
        teacherId: {
            ref: 'user',
            type: 'string',
            final: true
        },
        class: {
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
        firstCa: {
            type: 'number',
            min: 0,
            max: 15,
            default: 0
        },
        secondCa: {
            type: 'number',
            min: 0,
            max: 15,
            default: 0
        },
        exam: {
            type: 'number',
            min: 0,
            max: 70,
            default: 0
        },
        studentId: {
            ref: 'student',
            type: 'string',
            final: true
        },
        school: {
            ref: 'school',
            type: 'string',
            final: true
        }
    },
    required: ['subject', 'teacherId', 'class',
        'session', 'term', 'studentId', 'school']
};

export const subjectModel: KolConfig<typeof subjectSchema> = {
    name: SUBJECT_NAME,
    schema: subjectSchema
}
