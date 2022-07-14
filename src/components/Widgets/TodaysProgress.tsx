import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { ProgressBar } from '../ProgressBar'
import { Link, useLinkProps } from '@react-navigation/native';
import { BaseWidget } from './BaseWidget';

type TodaysProgressProps = {
    read: number;
    goal: number;
    style?: StyleSheet.NamedStyles<{}>;
}

export const TodayProgressWidget = (props: TodaysProgressProps) => {
    return (
        <BaseWidget colors={["#7F52D1", "#7444CD", "#6935C9", "#6232BB", "#5A2EAD", "#532A9E", "#4B2690"]} style={props.style}>
            {/*@ts-ignore*/}
            <View style={styles.cancelWrap}>
                <Text style={styles.todaysProgressText}>Today's Progress</Text>
                <Text style={styles.todaysProgressCounter}>{props.read}/{props.goal} verses</Text>
            </View>
            <ProgressBar style={styles.progressBar} total={props.goal} progress={props.read > props.goal ? props.goal : props.read} />
            <TouchableOpacity {...useLinkProps({ to: '/Settings', action: undefined})}>
                <Text style={styles.changeGoal}>Change Goal</Text>
            </TouchableOpacity>
        </BaseWidget>
    )
}

const styles = StyleSheet.create({
    todaysProgressText: {
        fontSize: 15,
        fontWeight: "bold",
        color: 'white',
    },

    todaysProgressCounter: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        marginTop: '1%',
    },

    progressBar: {
        marginTop: '1%',
    },

    cancelWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: "nowrap",
    },

    changeGoal: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        marginTop: '1%',
        textAlign: 'right'
    }

});