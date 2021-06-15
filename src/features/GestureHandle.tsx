import React, {useRef} from 'react';
import {Animated, PanResponder, StyleSheet, View} from 'react-native';

const GestureHandle = () => {
    const pan = useRef<any>(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([
                null,
                {
                    dx: pan.x,
                    dy: pan.y,
                },
            ]),
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value,
                });
            },
            onPanResponderRelease: () => {
                pan.flattenOffset();
            },
        }),
    ).current;

    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    transform: [{translateX: pan.x}, {translateY: pan.y}],
                }}
                {...panResponder.panHandlers}>
                <View style={styles.boxIn} />
            </Animated.View>
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
    boxIn: {
        width: 100,
        height: 200,
        borderRadius: 20,
        backgroundColor: 'green',
    },
});

export default GestureHandle;
