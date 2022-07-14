import React from 'react';
import { Text, View } from 'react-native';
import { IconComponentProvider, Icon } from "@react-native-material/core";
//@ts-ignore
import Icons from 'react-native-vector-icons/dist/Ionicons'
import designconf from '../designconf';

type TabBarIconsProps = {
    name: string;
    activated: boolean | false;
}

export const TabBarIcons = (props: TabBarIconsProps) => {
    if (props.name === 'Home') {
        if (!props.activated) {
            return (
                // @ts-ignore
                <IconComponentProvider IconComponent={Icons}>
                    <Icon name={designconf.tab.tabs.icons.inactive.home} size={designconf.tab.property_icon_size} color={designconf.tab.property_inactive_color} />
                </IconComponentProvider>
            );
        } else {
            return (
                // @ts-ignore
                <IconComponentProvider IconComponent={Icons}>
                    <Icon name={designconf.tab.tabs.icons.active.home} size={designconf.tab.property_icon_size} color={designconf.tab.property_active_color} />
                </IconComponentProvider>
            );
        }
    }
    else if (props.name === 'Quran') {
        if (!props.activated) {
            return (
                // @ts-ignore
                <IconComponentProvider IconComponent={Icons}>
                    <Icon name={designconf.tab.tabs.icons.inactive.quran} size={designconf.tab.property_icon_size} color={designconf.tab.property_inactive_color}/>
                </IconComponentProvider>
            );
        } else {
            return (
                // @ts-ignore
                <IconComponentProvider IconComponent={Icons}>
                    <Icon name={designconf.tab.tabs.icons.active.quran} size={designconf.tab.property_icon_size} color={designconf.tab.property_active_color}/>
                </IconComponentProvider>
            );
        }
    }
    else if (props.name === 'Settings') {
        if (!props.activated) {
            return (
                // @ts-ignore
                <IconComponentProvider IconComponent={Icons}>
                    <Icon name={designconf.tab.tabs.icons.inactive.settings} size={designconf.tab.property_icon_size} color={designconf.tab.property_inactive_color} />
                </IconComponentProvider>
            );
        } else {
            return (
                // @ts-ignore
                <IconComponentProvider IconComponent={Icons}>
                    <Icon name={designconf.tab.tabs.icons.active.settings} size={designconf.tab.property_icon_size} color={designconf.tab.property_active_color}/>
                </IconComponentProvider>
            );
        }
    } else return (<View><Text>{props.name}</Text></View>)
}