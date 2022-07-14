import React from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import { getMetaOfChapter } from "../../assets/data/Chapters"
import { getSurah } from "../../assets/data/Quran"
import { getNumberFromStorage, setToStorage } from "../../utils/MMKV/Storage"
import { IconItem } from "../Icon"
import { Verse } from "./Verse"

type QuranViewProps = {

    navigation: any, // navigation object
    route: Route, // route object

}

type Route = {
    key: string,
    name: string,
    params: RouteParams
}

type RouteParams = {
    surah: string,
    surahNumber: number
    startVerse: number,
    endVerse: number
}

export const QuranViewPortion = (props: QuranViewProps) => {
    const params: RouteParams = props["route"]["params"]
    const surahNumber = parseInt(props["route"]["params"]["surahNumber"].toString())
    const chapterMeta = getMetaOfChapter(surahNumber - 1)
    const surah = getSurah(surahNumber - 1)
    const [verse, setVerse] = React.useState(props["route"]["params"]["startVerse"])
    const [verseOn, setVerseOn] = React.useState(1)
    const [versesRead, setVersesRead] = React.useState([true])
    const [characters, setCharacters] = React.useState(0)
    React.useEffect(
        () =>
            props["navigation"].addListener('beforeRemove', () => {
                setToStorage("today__verses", (getNumberFromStorage("today__verses") || 0) + versesRead.length)
                setToStorage("read__verses", (getNumberFromStorage("read__verses") || 0) + versesRead.length)
                setToStorage("today__characters", (getNumberFromStorage("today__characters") || 0) + characters)
                setToStorage("read__characters", (getNumberFromStorage("read__characters") || 0) + characters)
            }
            )
    )

    return (
        <View style={styles.container}>
            <View style={{ ...styles.buttonContainer, ...styles.cancelWrap }}>
                <View style={styles.buttonLeft}>
                    <TouchableOpacity onPress={
                        () => {
                            if (verseOn == 1) { setVerseOn(1); setVerse(props["route"]["params"]["startVerse"]) }
                            else { setVerseOn(verseOn - 1); setVerse(verse - 1) }
                        }}>
                        <IconItem name="arrow-left-drop-circle" family="materialdesign" size={36} color="#fff" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.progress}>{verseOn} / {props["route"]["params"]["endVerse"]}</Text>
                <View style={styles.buttonRight}>
                    <TouchableOpacity onPress={
                        async () => {
                            if (
                                getMetaOfChapter(surahNumber).totalVerses === verse ||
                                props['route']["params"]["endVerse"] === verseOn
                            ) return;
                            else {
                                if (versesRead.length == 1) {
                                    setVersesRead([true, true])
                                    setCharacters(characters + surah.verses[verse - 1]["text"].replace(" ", "").length)
                                }
                                else if (versesRead.length <= verseOn) { 
                                    setVersesRead([...versesRead, true]) 
                                    setCharacters(characters + surah.verses[verse - 1]["text"].replace(" ", "").length)
                                }
                                setVerseOn(verseOn + 1)
                                setVerse(verse + 1)
                            }
                        }}>
                        <IconItem name="arrow-right-drop-circle" family="materialdesign" size={36} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.verseContainer}>
                <Verse english={surah.verses[verse - 1]["translation"]} arabic={surah.verses[verse - 1]["text"]} number={String(verse - 1)} transliteration={surah.verses[verse - 1]["transliteration"]} surah={params.surah} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        overflow: 'visible',
        backgroundColor: '#fff',
        height: "100%",
    },
    buttonRight: {
        alignContent: "center",
        alignItems: "center",
        zIndex: 1,
        marginRight: '5%',
    },
    buttonLeft: {
        alignContent: "center",
        alignItems: "center",
        zIndex: 1,
        marginLeft: '5%',
    },
    buttonContainer: {
        justifyContent: "center",
        width: "100%",
        height: "10%",
        backgroundColor: '#808080',
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
    },
    cancelWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: "nowrap",
    },
    verseContainer: {
        marginLeft: "3%",
        marginRight: "3%",
        fontSize: 24,
        marginBottom: "20%",
    },
    progress: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    }
})