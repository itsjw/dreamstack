import * as keytar from 'keytar';
import { saveLiensceKey, deleteLiensceKey, liensceKey, deleteSchoolId, saveSchoolId, schoolId } from './keys.program';

describe(`program::keys::liensce program liensce security key`, () => {
    const key = `dreamstack:lience:test`;

    beforeEach(() => {
        deleteLiensceKey();
    });

    it(`should save liensce key`, async () => {
        const spy = spyOn(keytar, 'setPassword');
        expect(await saveLiensceKey(key)).toBeUndefined();
        expect(spy).toHaveBeenCalled();
    });

    it(`should return the save liensce key`, async () => {
        const spy = spyOn(keytar, 'getPassword');
        const saved = await saveLiensceKey(key);
        if (saved) {
            expect(await liensceKey()).toBe(key);
            expect(spy).toHaveBeenCalled();
        }
    });

    it(`delete liensce key from the password store`, async () => {
        const spy = spyOn(keytar, 'deletePassword');
        expect(deleteLiensceKey()).toBeUndefined();
        expect(spy).toHaveBeenCalled();
    });
});

describe(`program::keys::schoolId unique school identification`, () => {
    const key = `dreamstack:schoolId:test`;

    beforeEach(() => {
        deleteSchoolId();
    });

    it(`should save schoolId key`, async () => {
        const spy = spyOn(keytar, 'setPassword');
        expect(await saveSchoolId(key)).toBeUndefined();
        expect(spy).toHaveBeenCalled();
    });

    it(`should return the saved schoolId`, async () => {
        const spy = spyOn(keytar, 'getPassword');
        const saved = await saveSchoolId(key);
        if (saved) {
            expect(await schoolId()).toBe(key);
            expect(spy).toHaveBeenCalled();
        }
    });

    it(`should delete schoolId from the password store`, async () => {
        const spy = spyOn(keytar, 'deletePassword');
        expect(deleteSchoolId()).toBeUndefined();
        expect(spy).toHaveBeenCalled();
    });
});
