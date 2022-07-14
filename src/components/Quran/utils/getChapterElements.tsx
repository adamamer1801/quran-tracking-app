import React from "react";
import { QuranListItem } from "../QuranListItem";
import { getEntireChapterMeta, getMetaOfChapter } from "../../../assets/data/Chapters";

export function getChapterElements(navigation: any): JSX.Element[] {
    let verseElements = [];
    let meta = getEntireChapterMeta()
    console.log(new Date().toISOString())
    for (let i = 0; i < 114; i++) {
        let _meta = meta[i];
        verseElements.push(
            <QuranListItem navigation={navigation} key={i} surah={_meta.transliteration} arabic={_meta.arabicName} translation={_meta.name} number={String(i)} nVerses={_meta.totalVerses} />
        )
    }
    console.log(new Date().toISOString())
    return verseElements;
}