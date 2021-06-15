/*eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {
    Composer,
    ComposerProps,
    GiftedChat,
    Send,
    SendProps,
} from 'react-native-gifted-chat';

const GiftChatExample = () => {
    const [messages, setMessages] = useState<Array<any>>([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/an',
                },
            },
        ]);
    }, []);

    const onSend = useCallback((newMess = []) => {
        console.log(newMess);
        setMessages(preMess => GiftedChat.append(preMess, newMess));
    }, []);

    const renderSend = (props: SendProps<any>) => {
        return (
            <Send
                {...props}
                containerStyle={{
                    backgroundColor: 'red',
                    width: '20%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Text>Hihi</Text>
            </Send>
        );
    };

    const renderComposer = (props: ComposerProps) => {
        return (
            <View style={{width: 220}}>
                <Composer
                    {...props}
                    textInputStyle={{
                        backgroundColor: 'orange',
                        width: 300,
                        height: 10,
                    }}
                />
            </View>
        );
    };

    const renderActions = () => {
        return (
            <View
                style={{
                    flex: 1,
                    padding: 0,
                    backgroundColor: 'purple',
                }}>
                <TouchableOpacity
                    style={{width: '50%', backgroundColor: 'yellow'}}
                    onPress={() => console.log('Cham nhe tim anh')}>
                    <Text>Cham</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{width: '100%', height: 100, backgroundColor: 'red'}}
            />
            <GiftedChat
                messages={messages}
                onSend={value => onSend(value)}
                user={{_id: 10}}
                listViewProps={{
                    contentContainerStyle: styles.chatBox,
                }}
                alwaysShowSend
                renderSend={renderSend}
                // renderInputToolbar={renderInputToolbar}
                renderComposer={renderComposer}
                renderActions={renderActions}
                messagesContainerStyle={{backgroundColor: 'green'}}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    chatBox: {
        flexGrow: 1,
        backgroundColor: 'transparent',
        justifyContent: 'flex-end',
    },
});

export default GiftChatExample;
