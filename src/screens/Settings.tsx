import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { DevSettings, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { IconItem } from '../components/Icon';
import designconf from '../designconf';
import { getNumberFromStorage, setToStorage } from '../utils/MMKV/Storage';

export const SettingsScreen = () => {
    const [goal, setGoal] = React.useState(getNumberFromStorage('goal') || 30);
    const [resetToday, setResetToday] = React.useState(false);
    const [resetAll, setResetAll] = React.useState(false);
    const [resetGoal, setResetGoal] = React.useState(false);

    const [message, setMessage] = React.useState("Settings");

    useFocusEffect(
        React.useCallback(() => {
            setGoal(getNumberFromStorage('goal') || 30);
            return () => { };
        }, [])
    );

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.message}>
                    <Text style={styles.messageText}>
                        {message}
                    </Text>
                </View>
                <SettingsSection title="Goal">
                    <SettingsItem title="Change Goal">
                        {/** Have the current goal in the middle with buttons left to right to increase decrease*/}
                        <View style={styles.goalContainer}>
                            <Text style={styles.goalText}>{goal} verses/day</Text>
                            <View style={styles.goalButtonsContainer}>
                                <TouchableOpacity style={styles.goalButton} onLongPress={() => { setGoal(goal + 10); setMessage("You have unsaved changes") }} onPress={() => { setGoal(goal + 1); setMessage("You have unsaved changes") }}>
                                    <Text style={styles.goalButtonText}>
                                        <IconItem name="add-outline"></IconItem>
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.goalButton} onLongPress={() => { setGoal(goal - 10); setMessage("You have unsaved changes") }} onPress={() => { setGoal(goal - 1); setMessage("You have unsaved changes") }}>
                                    <Text style={styles.goalButtonText}>
                                        <IconItem name="remove-outline"></IconItem>
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </SettingsItem>
                    <SettingsButtonItem title="Reset Goal" onPress={() => {
                        setMessage("You have unsaved changes")
                        setGoal(15);
                        setResetGoal(true);
                    }} />
                </SettingsSection>
                <SettingsSection title="Read">
                    <SettingsButtonItem title="Reset Read Today" onPress={() => {
                        setMessage("You have unsaved changes")
                        setResetToday(true);
                    }} />
                    <SettingsButtonItem title="Reset Read All Time" onPress={() => {
                        setMessage("You have unsaved changes")
                        setResetAll(true);
                    }} />
                </SettingsSection>
            </ScrollView>
            <SaveButton onPress={() => {

                if (goal < 1) {
                    setMessage('Goal must be at least 1');
                    return;
                }

                if (resetAll) {
                    setToStorage('today__verses', 0);
                    setToStorage('today__characters', 0);
                    setToStorage('read__verses', 0);
                    setToStorage('read__characters', 0);
                }
                
                if (resetToday) {
                    setToStorage('today__verses', 0);
                    setToStorage('today__characters', 0);
                    setToStorage("read__verses", (getNumberFromStorage("read__verses") || 0) - (getNumberFromStorage("today__verses") || 0));
                    setToStorage("read__characters", (getNumberFromStorage("read__characters") || 0) - (getNumberFromStorage("today__characters") || 0));
                }

                setMessage("Saved");
                setGoal(goal);
                setToStorage('goal', goal);
            }} />
        </View>
    );
}

const SettingsSection = (props: { title: string, children: React.ReactNode }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{props.title}</Text>
            {props.children}
        </View>
    );
}

const SettingsItem = (props: { title: string, children: React.ReactNode }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.itemTitle}>{props.title}</Text>
            {props.children}
        </View>
    );
}

const SettingsButtonItem = (props: { title: string, onPress: () => void }) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.settingsButtonItem}>
            <Text style={styles.settingsButtonItemText}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const SaveButton = (props: { onPress: () => void }) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.saveButton}>

            <Text style={styles.saveButtonText}><IconItem name="save" size={40}></IconItem></Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: designconf.app.background_color,
    },
    section: {
        padding: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    item: {
        margin: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#2b2d42',
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    saveButton: {
        margin: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#8d99ae',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: 'center',
    },
    saveButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    goalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: "nowrap",
    },
    goalButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: "nowrap",
    },
    goalButton: {
        padding: 5,
        borderRadius: 5,
        margin: 5,
    },
    goalButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    goalText: {
        fontSize: 18,
        color: 'white',
    },
    message: {
        margin: 10,
        padding: 10,
        borderRadius: 5,
    },
    messageText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2b2d42',
    },
    settingsButtonItem: {
        margin: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#8d99ae',
        textAlign: 'center',
    },
    settingsButtonItemText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    scrollView: {
        marginBottom: "16.5%",
    }
});