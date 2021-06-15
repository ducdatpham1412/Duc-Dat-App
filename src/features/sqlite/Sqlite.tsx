import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {checkGet} from '../../db-service/sqlite';

const Sqlite = () => {
    const getConnectionDb = async () => {
        const res = await checkGet();
        console.log('response: ', res);
    };

    useEffect(() => {
        getConnectionDb();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Sqlite</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Sqlite;
