import {openDatabase} from 'react-native-sqlite-storage';

const getDbConnection = async () => {
    return openDatabase({
        name: 'vankhan.db',
        createFromLocation: 1,
        location: 'default',
    });
};

export const getListCategory = async () => {
    const db = await getDbConnection();
    return new Promise((resolve, reject) => {
        db.transaction(txn => {
            txn.executeSql(
                'SELECT * from vankhan',
                [],
                (_, res) => {
                    resolve(res.rows.raw());
                },
                err => {
                    reject(err);
                },
            );
        });
    });
};
