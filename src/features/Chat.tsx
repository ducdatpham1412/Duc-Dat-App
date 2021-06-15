import React, {memo, useRef, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Config from 'react-native-config';

const fakeData = [...new Array(5).keys()].map((_, i) => i);

const Item = memo(
    ({item}: any) => {
        console.log('render: ', item.value);
        return (
            <View style={styles.children}>
                <Text>{item.value}</Text>
            </View>
        );
    },
    (prevProps, nextProps) => {
        if (prevProps.value !== nextProps.value) {
            return false;
        }
        return true;
    },
);

const Chat = () => {
    const [data, setData] = useState(fakeData);
    const listRef = useRef<FlatList>(null);

    const onAddElement = () => {
        setData([data.length, ...data]);
        // listRef?.current?.scrollToIndex({index: 0, animated: true});
    };

    const onDeleteElement = () => {
        const temp = data.filter((item, index) => index !== 2);
        setData(temp);
    };

    return (
        <View style={styles.container}>
            {/* <FlatList
                ref={listRef}
                data={data}
                renderItem={({item}) => <Item item={{value: item}} />}
                inverted
                keyExtractor={item => item}
            /> */}
            {data.map(item => {
                return <Item key={item} item={{value: item}} />;
            })}

            <View style={styles.buttonView}>
                <TouchableOpacity onPress={onAddElement}>
                    <Text>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onDeleteElement}>
                    <Text>Pop</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    children: {
        width: 200,
        height: 50,
        backgroundColor: 'red',
        marginVertical: 20,
    },
    buttonView: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: 1,
        flexDirection: 'row',
    },
});

export default Chat;
