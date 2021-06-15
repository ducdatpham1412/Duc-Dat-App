import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default () => {
    return (
        <View style={styles.container}>
            <Svg width={200} height={100}>
                <View style={styles.flagBox}>
                    <Text>
                        hihisdfsdfs fiosdijiosdf ksfisasifhsi0hihasif
                        sfhasfhaisfasif
                    </Text>
                </View>

                <Path
                    d={'M0 3 L200 3 L170 50 L200 97 L0 97 L30 50 L0 3'}
                    stroke="green"
                    strokeWidth={3}
                    fill="none"
                />
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    flagBox: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
