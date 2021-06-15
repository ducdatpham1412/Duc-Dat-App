import React, {memo, useState} from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const Compo = memo(() => {
    console.log('sdfsddsf');
    return (
        <View
            style={{
                width: 100,
                height: 100,
                marginVertical: 20,
                backgroundColor: 'red',
            }}
        />
    );
});

const Render = () => {
    const [data, setData] = useState([1, 2, 3]);

    const renderItem = ({item}) => {
        return <Compo />;
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    const temp = [...data];
                    temp.push(temp.length);
                    setData(temp);
                }}>
                <Text>add</Text>
            </TouchableOpacity>
            {/* {data.map((item, index) => (
                <Compo key={index} />
            ))} */}
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});

export default Render;
