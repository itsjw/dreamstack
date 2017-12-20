import * as pjson from 'pjson';
import { get } from 'js-logger';
import {
    setPassword, deletePassword,
    findPassword, getPassword, replacePassword
} from 'keytar';
import { PACKAGE } from 'app/utils';

const { dreamstack } = pjson as PACKAGE;
// const keysLogger = get('program:mainframe:keys');
// keysLogger.setLevel(keysLogger.DEBUG);
// const { debug } = keysLogger;
const { debug } = {
    debug: console.log
};

/** the appicaton name on the platform */
export const APPLICATION_NAME = dreamstack.accountName;

/** the school liensce  key account */
export const APPLICATION_SCHOOL_KEY = `${APPLICATION_NAME}:SCHOOL:LIENSCEKEY`;

/**
 * saves the liensce key to open the application and to
 * confirm it's validity
 *
 * @export
 * @param {string} key encrypted liensce key for the application
 * @returns
 */
export async function saveLiensceKey(key: string) {
    debug(`saveLiensceKey(key): saving program liensce key to os keystore`);
    return await setPassword(APPLICATION_NAME, APPLICATION_SCHOOL_KEY, key);
}

/**
 * retrieves the application liensce key for the application
 *
 * @export
 * @returns
 */
export async function liensceKey() {
    debug(`liensceKey(): retriving the program liensce key`);
    return await getPassword(APPLICATION_NAME, APPLICATION_SCHOOL_KEY);
}

/**
 * deletes the save liensce key for the application
 *
 * @export
 * @returns
 */
export function deleteLiensceKey() {
    debug(`deleteLiensceKey(): deleting the liensceKey from the keystore`)
    return deletePassword(APPLICATION_NAME, APPLICATION_SCHOOL_KEY);
}

const APPLICATION_SCHOOL_ID = `${APPLICATION_NAME}:SCHOOL_ID`;

/**
 * saves unique id for the school to track schools to their documents
 *
 * @export
 * @param {string} id the unique school Id to mapped the documents
 * @returns
 */
export async function saveSchoolId(id: string) {
    debug(`saveSchoolId(id): saving the unique school id to the key store`);
    return await setPassword(APPLICATION_NAME, APPLICATION_SCHOOL_ID, id)
}

/**
 * retreives the school unique id to track documents
 *
 * @export
 * @returns
 */
export async function schoolId() {
    debug(`schoolId(): retrieving the school id from the keystore`);
    return await getPassword(APPLICATION_NAME, APPLICATION_SCHOOL_ID);
}

/**
 * removes the school id used to track documents
 *
 * @export
 * @returns
 */
export function deleteSchoolId() {
    debug(`deleteSchoolId(): removing the school id from the keystore`)
    return deletePassword(APPLICATION_NAME, APPLICATION_SCHOOL_ID);
}
