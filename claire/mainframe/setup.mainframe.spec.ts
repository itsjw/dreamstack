import { mainframe, Kollections, initalizeKolls, configsError  } from './setup.mainframe';
import { to } from 'await-to-js';
import { DBKollections } from 'app/services/mainframe';

describe(`database mainframe::: testing database setups`, () => {
    const KollectionNames = [ 'auth', 'manager', 'parent', 'receipt',
        'school', 'student', 'score', 'user'
    ];

    it(`kollection:: the collection model schema's name must match kollectionNames`, () => {
        Kollections.forEach(e => {
            expect(KollectionNames.indexOf(e.name)).toBeGreaterThan(-1);
        });
        expect(Kollections.length).toEqual(8);
    });

    it(`initalizeKolls:: should throw error`, () => {
        initalizeKolls(undefined, []).catch(err => {
            expect(err.message).toMatch(configsError.message);
        })
    });

    it(`initalizeKolls:: should throw error`, () => {
        const schema = { name: 'd', schema: {} };
        const db: any = {};
        db[`collection`] = (arg) => Promise.resolve(arg);
        const dbSpy = spyOn(db, 'collection');
        initalizeKolls(db, [schema]);
        expect(dbSpy).toHaveBeenCalled();
    });

    it(`mainframe:: should contain the kollections mapped on the db`, async () => {
        const [err, db] = await to<DBKollections, Error>(mainframe());
        KollectionNames.forEach(e => {
            expect(db[e]).toBeDefined();
        });
    });

});
