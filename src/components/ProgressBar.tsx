import React from 'react';
import { StyleProp, StyleSheet, ViewStyle, View } from 'react-native'

type ProgressBarProps = {
    progress: number;
    total: number;
    style?: StyleProp<ViewStyle>;
}

export const ProgressBar = (props: ProgressBarProps) => {
    return (
        <View style={props.style}>
            <View style={styles.circle} />
            {/*@ts-ignore*/}
            <View style={{
                width: `${props.progress / props.total * 100}%`,
                height: '100%',
                backgroundColor: '#BBA5E5',
                borderRadius: 50,
                position: 'absolute',

            }}/>
        </View>
    )
}


const styles = StyleSheet.create({
    circle: {
        width: '100%',
        height: 10,
        borderRadius: 100 / 2,
        borderStyle: "solid",
        borderColor: "#ffffff",
        backgroundColor: "white",
    },
});
