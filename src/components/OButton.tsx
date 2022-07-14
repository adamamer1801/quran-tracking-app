import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import type { StyleProp } from 'react-native';

type ButtonProps = {
    onPress: () => void;
    view_style?: StyleProp<ViewStyle>;
    text_style?: StyleProp<TextStyle>;
    children?: React.ReactNode;
    textColor?: string;
    centerText?: boolean;
    color?: string;
}
export const OButton = (props: ButtonProps) => {
    if (props.centerText) {
        return (
            <TouchableOpacity onPress={props.onPress} style={{ ...styles.obutton, backgroundColor: props.color || '#808080', }}>
                <TouchableOpacity style={props.view_style}>
                    <Text style={{ textAlign: 'center', color: props.textColor }}>
                        <Text style={props.text_style}>
                            {props.children}
                        </Text>
                    </Text>
                </TouchableOpacity>
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity onPress={props.onPress} style={{ ...styles.obutton, backgroundColor: props.color || '#808080', }}>
                <TouchableOpacity style={props.view_style}>
                    <Text style={{ color: props.textColor }}>
                        <Text style={props.text_style}>
                            {props.children}
                        </Text>
                    </Text>
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    obutton: {
        padding: 10,
        borderRadius: 5,
        width: '30%',
        margin: 10,
    },
});