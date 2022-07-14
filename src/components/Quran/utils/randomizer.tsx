import { ChapterMetaType, getEntireChapterMeta } from "../../../assets/data/Chapters";
import { Surah } from "../../../assets/data/Quran";

export function getRandomChapter(totalVersesMoreThan = 0): ChapterMetaType {
    // give a random surah from getEntireChapterMeta() with more verses than moreThan
    let chapterMeta: ChapterMetaType;
    do {
        chapterMeta = getEntireChapterMeta()[Math.floor(Math.random() * getEntireChapterMeta().length)];
    } while (chapterMeta.totalVerses < totalVersesMoreThan);
    return chapterMeta;
} 