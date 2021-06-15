/* eslint-disable react-hooks/exhaustive-deps */
import React, {memo, useEffect, useRef, useState} from 'react';
import {
    Animated,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const total = [1, 2, 3, 4, 5, 6, 7, 8];

const FavoriteTag = memo((props: any) => {
    const {id, onPress, isLike} = props;
    const translateY = useRef<any>(
        new Animated.Value(isLike ? 300 : 0),
    ).current;

    console.log(id);

    useEffect(() => {
        if (isLike) {
            Animated.timing(translateY, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }).start();
        }
    }, []);

    return (
        <Animated.View style={{transform: [{translateY}]}}>
            <TouchableOpacity style={styles.favoriteTag} onPress={onPress}>
                <Text>{id}</Text>
            </TouchableOpacity>
        </Animated.View>
    );
});

const HeartScreen = () => {
    const [like, setLike] = useState<Array<any>>([]);
    const [dislike, setDislike] = useState<Array<any>>(total);

    const addOrDecreaseFavorite = (index: number, isAdd = true) => {
        if (isAdd) {
            const temptLike: any = [...like, dislike[index]];
            setLike(temptLike);

            const temptDislike: Array<any> = [...dislike];
            temptDislike.splice(index, 1);
            setDislike(temptDislike);
        } else {
            const temptDislike: any = [...dislike, like[index]];
            setDislike(temptDislike);

            const temptLike: Array<any> = [...like];
            temptLike.splice(index, 1);
            setLike(temptLike);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.elementView}>
                {like.map((item, index) => (
                    <FavoriteTag
                        key={item}
                        id={item}
                        onPress={() => addOrDecreaseFavorite(index, true)}
                        isLike
                    />
                ))}
            </View>

            <View style={styles.elementView}>
                {dislike.map((item, index) => (
                    <FavoriteTag
                        key={item}
                        id={item}
                        onPress={() => addOrDecreaseFavorite(index)}
                    />
                ))}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    elementView: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'green',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    favoriteTag: {
        paddingVertical: 5,
        paddingHorizontal: 50,
        backgroundColor: 'orange',
        borderRadius: 10,
        margin: 5,
    },
});

export default HeartScreen;
