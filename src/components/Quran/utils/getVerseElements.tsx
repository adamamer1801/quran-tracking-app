import React from 'react';
import { getMetaOfChapter } from '../../../assets/data/Chapters';
import { getSurah } from '../../../assets/data/Quran';
import { Verse } from '../Verse';

export function getVerseElements(n: number) {
    let verseElements = [];
    let verses = getSurah(n)["verses"];
    for (let i = 0; i < verses.length; i++) {
        verseElements.push(
            <Verse
                key={i}
                surah={getMetaOfChapter(n).name}
                english={verses[i]["translation"]}
                arabic={verses[i]["text"]}
                number={String(verses[i]["id"])}
                transliteration={verses[i]["transliteration"]}
            />
        )
    }
    return verseElements;
}

export function getVerseElement(s: number, v: number) {
    let verse = getSurah(s)["verses"][v];
    return (
        <Verse
            key={v}
            surah={getMetaOfChapter(s).name}
            english={verse["translation"]}
            arabic={verse["text"]}
            number={String(verse["id"])}
            transliteration={verse["transliteration"]}
        />
    )
}