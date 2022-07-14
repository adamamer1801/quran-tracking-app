import React from 'react';
import { ScrollView, View, Text, StyleSheet} from 'react-native';

type VerseProps = {
    surah: string,
    english: string,
    arabic: string,
    transliteration: string,
    number: string,
}

export const Verse = (props: VerseProps) => {
    return (
        <ScrollView>
            <Text style={styles.verseDetails}>{props.surah} v. {props.number}</Text>
            <Text style={styles.verseArabic}>{props.arabic}</Text>
            <Text style={styles.verseTransliteration}>{props.transliteration}</Text>
            <Text style={styles.verseEnglish}>{props.english}</Text>
        </ScrollView>
    )
}

let styles = StyleSheet.create({
    verse: {
        flexDirection: 'column',
        overflow: 'visible',
        height: "100%",
    },
    verseDetails: {
        fontSize: 24,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: '1%',
        marginTop: '2%',
        textAlign: 'center',
    },
    verseArabic: {
        fontSize: 38,
        color: '#000',
        marginBottom: '1%',
    },
    verseEnglish: {
        fontSize: 22,
        color: '#000',
        marginBottom: '1%',
    },
    verseTransliteration: {
        fontSize: 22,
        color: '#495057',
        marginBottom: '2%',
    }
})