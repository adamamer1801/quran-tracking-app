import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import React from "react"
import LinearGradient from "react-native-linear-gradient"
import { getSurah } from "../../assets/data/Quran"

type QuranListItemProps = {
    surah: string,
    arabic: string,
    translation: string,
    nVerses: number,
    number: string,
    navigation: any
}

export const QuranListItem = (props: QuranListItemProps) => {
    return (
        <LinearGradient
            colors={["#12131C", "#12131C"]}
            style={styles.quranListItem}
            start={
                { x: 0, y: 1 }
            }
            end={
                { x: 1, y: 0 }
            }
        >
            <TouchableOpacity style={styles.quranListItemWrapper} onPress={
                () => {
                    props.navigation.navigate("Quran Viewer", {
                        surah: props.surah,
                        arabic: props.arabic,
                        translation: props.translation,
                        nVerses: props.nVerses,
                        number: props.number,
                    })
                }
            }>
                <View>
                    <View style={styles.cancelWrap}>
                        <Text style={{ ...styles.quranListItemText, ...styles.cancelWrap }}>{props.surah}</Text>
                        <Text style={{ ...styles.quranListItemText, ...styles.cancelWrap, ...styles.arabic }}>{props.arabic}</Text>
                    </View>
                    <View style={styles.cancelWrap}>
                        <Text style={{ ...styles.quranListItemTextVerses, ...styles.cancelWrap }}>{props.nVerses} verses</Text>
                        <Text style={{ ...styles.quranListItemText, ...styles.cancelWrap }}>{props.translation}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    quranListItem: {
        width: "90%",
        margin: "1%",
        marginLeft: "5%",
        borderRadius: 15,
        overflow: "visible",
        padding: '1%',
        paddingBottom: '3%',
    },
    quranListItemText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffff",
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "1%",
    },
    quranListItemTextVerses: {
        fontSize: 16,
        color: "#ffffff",
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "1%",
    },
    cancelWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: "nowrap",
    },
    quranListItemWrapper: {
        marginTop: "1%",
    },
    arabic: {
        textAlign: "right",
        fontSize: 24,
    },
    bigNumber: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff",
        marginLeft: "2%",
        marginRight: "5%",
        marginTop: "1%",
        textAlign: "center",
    }

})