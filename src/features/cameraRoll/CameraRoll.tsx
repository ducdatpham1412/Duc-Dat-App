import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

const CameraRollComponent = () => {
    const [image, setImage] = useState('');

    const onReadImage = async () => {
        const res = await CameraRoll.getPhotos({
            assetType: 'Photos',
            first: 20,
            include: ['filename', 'location'],
        });
        const listImg = res.edges.map(item => item.node.image.uri);
        setImage(listImg[0]);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onReadImage}>
                <Text>Read data</Text>
            </TouchableOpacity>

            <Image source={{uri: image}} style={{width: 100, height: 100}} />
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

export default CameraRollComponent;
