import React, {useRef, useState} from 'react';
import {Animated, Easing, PanResponder, StyleSheet, View} from 'react-native';

let x: any;

const EquationAnimation = () => {
    const oldPan = useRef(new Animated.Value(0)).current;
    const pan = useRef(new Animated.Value(0)).current;

    const [displayOption, setDisplayOption] = useState(false);

    const panResponse = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (evt, gesture) => {
                clearTimeout(x);
                const dx = gesture.dx;
                const newPan = oldPan._value + dx;

                if (newPan < -70 || newPan > 0) {
                    return;
                }
                pan.setValue(newPan);
            },
        }),
    ).current;

    return (
        <View style={styles.container}>
            <View style={styles.messageView}>
                {displayOption && <View style={styles.optionBox} />}
                <Animated.View
                    style={[
                        styles.animatedBox,
                        {transform: [{translateX: pan}]},
                    ]}
                    {...panResponse.panHandlers}
                    onResponderRelease={() => {
                        // come back to start position
                        if (pan._value > oldPan._value) {
                            Animated.spring(pan, {
                                toValue: 0,
                                useNativeDriver: true,
                            }).start(() => {
                                oldPan.setValue(0);
                            });
                        }
                        // auto come to -70 when move < -30
                        else if (pan._value < -30) {
                            Animated.spring(pan, {
                                toValue: -70,
                                useNativeDriver: true,
                            }).start(() => {
                                oldPan.setValue(-70);
                            });
                        }
                        // if move > -30, auto comeback to 0
                        else {
                            Animated.spring(pan, {
                                toValue: 0,
                                useNativeDriver: true,
                            }).start(() => {
                                oldPan.setValue(0);
                            });
                        }

                        // auto come back to 0 after 2 seconds
                        x = setTimeout(() => {
                            Animated.spring(pan, {
                                toValue: 0,
                                useNativeDriver: true,
                            }).start();
                        }, 2000);
                        return () => clearTimeout(x);
                    }}
                    onTouchStart={() => setDisplayOption(true)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
    },
    messageView: {
        width: '100%',
        height: 50,
        flexDirection: 'row-reverse',
    },
    animatedBox: {
        width: '60%',
        height: '100%',
        backgroundColor: 'red',
        marginRight: 20,
    },
    optionBox: {
        position: 'absolute',
        left: 20,
        width: 150,
        height: '100%',
        backgroundColor: 'blue',
    },
});

export default EquationAnimation;
