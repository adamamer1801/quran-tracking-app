import React from 'react';
import { View, StyleSheet } from "react-native";
import { TodayProgressWidget } from './TodaysProgress';
import { getNumberFromStorage } from '../../utils/MMKV/Storage';
import { StatisticsWidget } from './StatisticsWidget';
import { ProjStatisticWidget } from './ProjStatisticsWidget';
import { useFocusEffect } from '@react-navigation/native';
import { CompleteGoalWidget } from './CompleteGoalWidget';
import { newDayRoutine } from '../../utils/Launch/RegularLaunch/newDayRoutine';

type WidgetProps = {
    navigation?: any
}

export const Widgets = (props: WidgetProps) => {
    const [totalVerses, setTotalVerses] = React.useState(getNumberFromStorage('read__verses') || 0);
    const [todayVerses, setTodayVerses] = React.useState(getNumberFromStorage('today__verses') || 0);
    const [totalCharacters, setTotalCharacters] = React.useState(getNumberFromStorage('read__characters') || 0);
    const [todayCharacters, setTodayCharacters] = React.useState(getNumberFromStorage('today__characters') || 0);
    const [goal, setGoal] = React.useState(getNumberFromStorage('goal') || 30);

    useFocusEffect(
        React.useCallback(() => {
            newDayRoutine()
            setTotalCharacters(getNumberFromStorage('read__characters') || 0);
            setTodayCharacters(getNumberFromStorage('today__characters') || 0);
            setTotalVerses(getNumberFromStorage('read__verses') || 0);
            setTodayVerses(getNumberFromStorage('today__verses') || 0);
            setGoal(getNumberFromStorage('goal') || 30);
        }, [])
    );

    return (
        <View style={styles.widgetsContainer}>
            <TodayProgressWidget style={styles.widgetItem}
                read={todayVerses}
                goal={goal}
            />

            <StatisticsWidget style={styles.widgetItem}
                versesToday={todayVerses}
                versesTotal={totalVerses}
                charactersToday={todayCharacters}
                charactersTotal={totalCharacters}
            />

            <ProjStatisticWidget style={styles.widgetItem}
                versesToday={todayVerses}
                versesTotal={totalVerses}
                charactersToday={todayCharacters}
                charactersTotal={totalCharacters}
                goal={goal}
            />

            <CompleteGoalWidget style={styles.widgetItem}
                read={todayVerses}
                goal={goal}
                navigation={props.navigation}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    widgetsContainer: {
        height: "90%",
        width: "100%",
    },

    widgetItem: {
        marginTop: '2%',
    }
})