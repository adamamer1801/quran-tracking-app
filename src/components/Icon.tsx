import React from "react";
import { IconComponentProvider, Icon } from "@react-native-material/core";
//@ts-ignore
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
//@ts-ignore
import MaterialIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import { StyleSheetProperties, View } from "react-native";

type IconProps = {
    name: string;
    size?: number;
    color?: string;
    family?: string;
    styles?: StyleSheetProperties
}
export const IconItem = (props: IconProps) => {
    return (
        //@ts-ignore
        <View style={props.styles || {}}>
            {/** @ts-ignore */}
            <IconComponentProvider IconComponent={props.family?.toLowerCase() == "materialdesign" ? MaterialIcons : Ionicons}>
                <Icon name={props.name} size={props.size || 16} color={props.color || "#ffffff"} />
            </IconComponentProvider>
        </View>
    );
}