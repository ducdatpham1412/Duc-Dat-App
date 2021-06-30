import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MARVEL_API} from '@env';

const Env = () => {
    return (
        <View style={styles.container}>
            <Text>{MARVEL_API}</Text>
            <Text>Helelel</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Env;
