import React from 'react';
import {SafeAreaView, View} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

// const ScrollableTabView = require('react-native-scrollable-tab-view');

const ScrollTabView = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'lightblue'}}>
            <ScrollableTabView tabBarPosition="bottom">
                <View tabLabel="One" />
                <View tabLabel="One" />
                <View tabLabel="One" />
                <View tabLabel="One" />
            </ScrollableTabView>
        </SafeAreaView>
    );
};

export default ScrollTabView;
