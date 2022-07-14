import React from "react"
import { View, StyleSheet, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { getMetaOfChapter } from "../../assets/data/Chapters"
import { getSurah } from "../../assets/data/Quran"
import { getChapterElements } from "./utils/getChapterElements"
import { QuranListItem } from "./QuranListItem"

type QuranListProps = {
    navigation: any
}

export const QuranList = (props: QuranListProps) => {
    return (
        <View style={styles.container}>
            {getChapterElements(props.navigation)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {}
})