import React, {Component, useState} from 'react';
import {
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';
import MessageContainer from './MessageContainer';

interface IProps {}
interface IState {
    messageContainerHeight: number;
}

const StyleContainer = () => {
    const [messageContainerHeight, setMessageContainerHeight] = useState(0);

    const onKeyboardWillShow = (e: any) => {
        console.log('will show');
        setMessageContainerHeight(300);
    };
    const onKeyboardWillHide = (e: any) => {
        const {nativeEvent} = e;
        setMessageContainerHeight(nativeEvent.layout.height - 50);
    };

    const invertibleProps = {
        onKeyboardWillShow,
        onKeyboardWillHide,
    };

    const onMainLayout = (e: any) => {
        const {nativeEvent} = e;
        setMessageContainerHeight(nativeEvent.layout.height - 50);
    };

    const renderMessage = () => {
        return (
            <KeyboardAvoidingView enabled>
                <View
                    style={{
                        height: messageContainerHeight,
                    }}>
                    <MessageContainer invertibleProps={invertibleProps} />
                </View>
            </KeyboardAvoidingView>
        );
    };

    const renderInputToolBar = () => {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    accessible
                    multiline
                    placeholder="Aa"
                    style={styles.input}
                />
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{width: '100%', height: 20, backgroundColor: 'green'}}
            />
            <View style={styles.container} onLayout={onMainLayout}>
                {renderMessage()}
                {renderInputToolBar()}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        width: '100%',
        backgroundColor: 'lightblue',
        paddingHorizontal: 20,
    },
    input: {
        fontSize: 13,
        backgroundColor: 'red',
        marginVertical: 0,
        paddingVertical: 0,
        paddingBottom: 10,
    },
});

export default StyleContainer;
