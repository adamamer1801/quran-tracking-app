import { useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { TabBarIcons } from '../components/TabBarIcon';
import { TodayProgressWidget } from '../components/Widgets/TodaysProgress';
import { Widgets } from '../components/Widgets/Widgets';
import designconf from '../designconf';
import { launch } from '../utils/Launch/RegularLaunch/Launch';
import { getNumberFromStorage } from '../utils/MMKV/Storage';

type HomeScreenProps = {
    navigation: any;
}

const HomeScreen = (props: HomeScreenProps) => {
    launch()
    return (
        <View style={styles.container}>
            {/* @ts-ignore */}
            <Text style={styles.salam}>سلام</Text>
            <Widgets navigation={props.navigation} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: designconf.app.background_color,
    },
    salam: {
        fontSize: 40,
        marginTop: 30,
        textAlign: 'center',
        color: '#000',
        fontStyle: designconf.app.font
    }
});

export default HomeScreen;