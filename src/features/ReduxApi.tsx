import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useGetPokemonByNameQuery} from '../app-redux/accSlice';

const ReduxApi = () => {
    const {data, error, isLoading} = useGetPokemonByNameQuery('bulbasaur');

    console.log(data, error, isLoading);

    if (isLoading) {
        return (
            <View style={styles.container}>
                <Text>is-loading</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text>{JSON.stringify(data, null, 2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ReduxApi;
