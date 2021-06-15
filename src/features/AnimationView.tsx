import React, {useEffect} from 'react';
import {Animated, Keyboard, StyleSheet, TextInput, View} from 'react-native';

const AnimationView = () => {
    const animationValue = new Animated.Value(180);

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            Animated.timing(animationValue, {
                toValue: 300,
                duration: 400,
                useNativeDriver: false,
            }).start();
        });
        Keyboard.addListener('keyboardDidHide', () => {
            Animated.timing(animationValue, {
                toValue: 180,
                duration: 400,
                useNativeDriver: false,
            }).start();
        });
    }, []);

    return (
        <View style={styles.MainContainer}>
            <View
                style={{
                    width: '100%',
                    flexDirection: 'row',
                }}>
                <View style={{flex: 1, backgroundColor: 'lightgreen'}} />
                <Animated.View
                    style={{
                        width: animationValue,
                        height: 300,
                        backgroundColor: 'red',
                    }}
                />
            </View>

            <TextInput style={{backgroundColor: 'lightblue', width: '80%'}} />
        </View>
    );
};

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
    },
    animatedBox: {
        width: 180,
        height: 180,
        backgroundColor: '#0091EA',
    },

    text: {
        color: '#FFFFFF',
    },
});

export default AnimationView;
