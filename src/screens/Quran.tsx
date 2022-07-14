import React, { Suspense } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { QuranList } from '../components/Quran/QuranList';
import designconf from '../designconf';

type QuranScreenProps = {
    navigation: any;
}

export const QuranScreen = (props: QuranScreenProps) => {
    return (
        <View style={StyleSheet.absoluteFill}>
            <ScrollView style={styles.container}>
                <QuranList navigation={props.navigation} />
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: designconf.app.background_color,
        width: "100%",
    },
    contentContainer: {
    },

});