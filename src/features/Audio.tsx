import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Sound from 'react-native-sound';

const audioList = {
    title: 'Play mp3 from remote',
    isRequire: true,
    url: require('../asset/audio.mp3'),
};

let sound: Sound;

const Audio = () => {
    const playAudio = () => {
        Sound.setCategory('Playback');
        sound = new Sound(audioList.url, err => {
            if (err) {
                console.log('Have err: \n', err);
                return;
            }
            console.log('Playing music');
            sound.play(() => {
                sound.release();
            });
        });
    };

    const stopAudio = () => {
        if (!!sound) {
            sound.stop(() => {
                console.log('Stop sound');
            });
        }
    };

    return (
        <View style={styles.container}>
            <Text>Example to play Music in React Native</Text>

            <View style={styles.audioView}>
                <TouchableOpacity onPress={playAudio} style={styles.button}>
                    <Text>Play</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={stopAudio}>
                    <Text>Stop</Text>
                </TouchableOpacity>
            </View>
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
    audioView: {
        width: '100%',
        height: 300,
        backgroundColor: 'lightgreen',
    },
    button: {
        marginVertical: 50,
    },
});

export default Audio;
