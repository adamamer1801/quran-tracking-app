import React from 'react';
import HomeScreen from '../screens/Home';
import { QuranScreen } from '../screens/Quran';
import { SettingsScreen } from '../screens/Settings';
import { TabBarIcons } from './TabBarIcon';
import designconf from '../designconf';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createMaterialBottomTabNavigator();

type NavigationTabsProps = {
    navigation: any;
}

export const Navigation = (props_: NavigationTabsProps) => {
    return (
        <Tab.Navigator initialRouteName='home'
            shifting={true}
            barStyle={{ backgroundColor: designconf.tab.background_color }}
            activeColor={designconf.tab.property_active_color}
            inactiveColor={designconf.tab.property_active_color}
            sceneAnimationEnabled={true}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let returnValue = null;
                    if (route.name.toLocaleLowerCase() === "home") {
                        returnValue = focused ? <TabBarIcons name="Home" activated={true} /> : <TabBarIcons name="Home" activated={false} />;
                    } else if (route.name.toLocaleLowerCase() === "quran") {
                        returnValue = focused ? <TabBarIcons name="Quran" activated={true} /> : <TabBarIcons name="Quran" activated={false} />;
                    } else if (route.name.toLocaleLowerCase() === "settings") {
                        returnValue = focused ? <TabBarIcons name="Settings" activated={true} /> : <TabBarIcons name="Settings" activated={false} />;
                    }
                    return returnValue;
                }
            })}>

            {/*@ts-ignore*/}
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarColor: designconf.tab.tabs['selected-bg-colors'].home //designconf.tab.property_active_color,
                }}
            />

            <Tab.Screen
                name="Quran"
                component={QuranScreen}
                initialParams={{
                    navigation: props_.navigation
                }}
                options={{
                    tabBarColor: designconf.tab.tabs['selected-bg-colors'].quran //designconf.tab.property_active_color,
                }}
            />

            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarColor: designconf.tab.tabs['selected-bg-colors'].settings //designconf.tab.property_active_color,
                }}
            />

        </Tab.Navigator>
    )
}
