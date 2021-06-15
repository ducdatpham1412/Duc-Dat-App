import React from 'react';
import {Keyboard, View} from 'react-native';

interface IProps {
    invertibleProps: any;
}

class MessageContainer extends React.Component<IProps> {
    attachKeyboardListeners = () => {
        const {invertibleProps} = this.props;
        Keyboard.addListener(
            'keyboardWillShow',
            invertibleProps.onKeyboardWillShow,
        );
        Keyboard.addListener(
            'keyboardDidShow',
            invertibleProps.onKeyboardWillShow,
        );
    };

    detachKeyboardListeners = () => {
        const {invertibleProps} = this.props;
        Keyboard.removeListener(
            'keyboardWillShow',
            invertibleProps.onKeyboardWillShow,
        );
        Keyboard.removeListener(
            'keyboardDidShow',
            invertibleProps.onKeyboardWillShow,
        );
    };

    componentDidMount() {
        this.attachKeyboardListeners();
    }

    componentWillUnmount() {
        this.detachKeyboardListeners();
    }

    render() {
        return <View style={{flex: 1, backgroundColor: 'orange'}} />;
    }
}

export default MessageContainer;
