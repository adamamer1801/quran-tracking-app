import React from "react"
import { Alert, Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import LinearGradient from "react-native-linear-gradient";
import { getMetaOfChapter } from "../../assets/data/Chapters";
import { getRandomChapter } from "../Quran/utils/randomizer";
import { BaseWidget } from './BaseWidget'

type CompleteGoalProps = {
    read: number,
    goal: number,
    style: StyleSheet.NamedStyles<{}>;
    navigation: any
}

export const CompleteGoalWidget = (props: CompleteGoalProps) => {
    return (
        <BaseWidget
            colors={["#33C0B0", "#2EAFA0", "#2A9D8F", "#279285", "#279285", "#24877B", "#217B71"]}
            style={props.style}
        >
            <View style={{ ...styles.cancelWrap, ...styles.container }}>
                <View>
                    <Text style={styles.finishYourGoal}>Finish your goal</Text>
                    <Text style={styles.letUsSelect}>{
                        props.read >= props.goal
                            ? "You have completed your goal :)"
                            : "Let us select " + (props.goal - props.read) + " verses for you"
                    }
                    </Text>
                </View>
                <LetsDoItButton onPress={() => {
                    let randomChapter = getRandomChapter(props.goal - props.read)
                    let randomStartVerse: number;

                    if (props.goal >= 150) {
                        Alert.alert("Your goal is too high for randomization", "Please read manually in the Quran tab")
                    } else {
                        let iteration = 0
                        do {
                            if (iteration == 10) randomStartVerse = 1
                            randomStartVerse = Math.floor(Math.random() * randomChapter.totalVerses)
                        } while (randomStartVerse + (props.goal - props.read) > randomChapter.totalVerses)
                        
                        if (randomStartVerse == 0) randomStartVerse = 1

                        props.navigation.navigate("Partial Verse Viewer", {
                            surah: randomChapter.transliteration,
                            surahNumber: randomChapter.id,
                            startVerse: randomStartVerse,
                            endVerse: (props.goal - props.read) > 150 ? 150 : (props.goal - props.read),
                        })
                    }

                }} completed={props.read >= props.goal} />
            </View>
        </BaseWidget >
    )
}

const LetsDoItButton = (props: { onPress: () => void, completed: boolean }) => {
    if (props.completed) return <></>
    else return (
        <View style={styles.letsdoItButtonContainer}>
            <TouchableOpacity onPress={props.onPress}>

                <LinearGradient
                    colors={["#3ECC88", "#3ECCBB"]}
                    style={styles.letsDoItButton}
                    start={
                        { x: 0, y: 0 }
                    }
                    end={
                        { x: 1, y: 1 }
                    }

                >
                    <Text style={styles.letsDoItButtonText}>Let's do it!</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    cancelWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: "nowrap",
    },
    finishYourGoal: {
        fontSize: 15,
        fontWeight: "bold",
        color: 'white',
    },
    container: {
        marginTop: '1.5%',
        marginBottom: '1.5%',
    },
    letUsSelect: {
        fontSize: 15,
        color: 'white',
        marginTop: '1%',
    },
    letsDoItButton: {
        padding: "4%",
        borderRadius: 10,
        elevation: 10,
    },
    letsDoItButtonText: {
        fontSize: 15,
        fontWeight: "bold",
        color: 'white',
        textAlign: 'center'
    },
    letsdoItButtonContainer: {
        borderRadius: 5,
        width: "32%",
        marginLeft: "4.5%"
    }
})
