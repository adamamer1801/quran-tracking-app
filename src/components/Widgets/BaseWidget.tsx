import React from 'react';
import LinearGradient from "react-native-linear-gradient";
import { Text, View, StyleSheet } from "react-native";

type BaseWidget = {
    colors: string[];
    children: React.ReactNode;
    style?: StyleSheet.NamedStyles<{}>;
    doubleSized?: boolean;
}

export const BaseWidget = (props: BaseWidget) => {
    return (
        <View style={!props.doubleSized ? { ...styles.baseWidget, ...props.style } : { ...styles.baseWidgetBig, ...props.style }}>
            <LinearGradient
                colors={props.colors}
                start={
                    {x: 0, y: 0}
                }
                end={
                    {x: 1, y: 1}
                }
                style={styles.baseWidgetWrapper}
            >
                <View style={styles.baseWidgetChildren}>
                    {props.children}
                </View>

            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    baseWidget: {
        width: '95%',
        marginTop: '2%',
        marginLeft: '2.5%',
        borderRadius: 15,
        borderStyle: "solid",
        alignContent: 'center',
        overflow: 'hidden',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        elevation: 10,
    },

    baseWidgetBig: {
        width: '95%',
        height: 'auto',
        marginTop: '2%',
        marginLeft: '2.5%',
        borderRadius: 15,
        borderStyle: "solid",
        alignContent: 'center',
        overflow: 'hidden',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        elevation: 10,
    },

    baseWidgetWrapper: {
        width: '95%',
        padding: '2%',
        marginLeft: '2.5%',
        borderRadius: 15,
    },

    baseWidgetChildren: {
        width: '90%',
        alignContent: 'center',
        paddingLeft: '0%',
        marginLeft: '5%',
    }
});