import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native"
import React from "react"
import { Verse } from "./Verse"
import { IconItem } from '../Icon'
import { getSurah } from "../../assets/data/Quran"
import { getMetaOfChapter } from "../../assets/data/Chapters"
import { Zocial } from "@expo/vector-icons"
import { getNumberFromStorage, setToStorage } from "../../utils/MMKV/Storage"

type QuranViewProps = {

    navigation: any
    route: Route

}

type Route = {
    key: string,
    name: string,
    params: RouteParams
}

type RouteParams = {
    arabic: string,
    number: string,
    surah: string,
    translation: string
}

export const QuranView = (props: QuranViewProps) => {
    const params: RouteParams = props["route"]["params"]

    const surahNumber = parseInt(params.number)

    const chapterMeta = getMetaOfChapter(surahNumber + 1)
    const surah = getSurah(surahNumber)

    const [verse, setVerse] = React.useState(1)
    const [versesRead, setVersesRead] = React.useState([true])
    const [characters, setCharacters] = React.useState(0)
    React.useEffect(
        () =>
            props["navigation"].addListener('beforeRemove', () => {
                setToStorage("today__verses", (getNumberFromStorage("today__verses") || 0) + versesRead.length)
                setToStorage("read__verses", (getNumberFromStorage("read__verses") || 0) + versesRead.length)
                setToStorage("today__characters", (getNumberFromStorage("today__verses") || 0) + versesRead.length)
                setToStorage("read__characters", (getNumberFromStorage("read__verses") || 0) + versesRead.length)            
            }

        )
    )
    return (
        <View style={styles.container}>
            <View style={{ ...styles.buttonContainer, ...styles.cancelWrap }}>
                <View style={styles.buttonLeft}>
                    <TouchableOpacity onPress={
                        () => {
                            if (verse == 1) setVerse(1)
                            else setVerse(verse - 1)
                        }}>
                        <IconItem name="arrow-left-drop-circle" family="materialdesign" size={36} color="#fff" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.progress}>{verse} / {chapterMeta.totalVerses}</Text>
                <View style={styles.buttonRight}>
                    <TouchableOpacity onPress={
                        async () => {
                            if (chapterMeta.totalVerses == verse) return;
                            else { 
                                if (versesRead.length < verse + 1) { setVersesRead([...versesRead, true]); setCharacters(characters + surah.verses[verse - 1]["text"].replace(" ", "").length) }
                                setVerse(verse + 1) 
                            } 
                        }}>
                        <IconItem name="arrow-right-drop-circle" family="materialdesign" size={36} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.verseContainer}>
                <Verse english={surah.verses[verse - 1]["translation"]} arabic={surah.verses[verse - 1]["text"]} number={String(verse)} transliteration={surah.verses[verse - 1]["transliteration"]} surah={params.surah} />
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