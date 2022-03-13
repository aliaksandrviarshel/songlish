import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Song } from '../models/song.model';
import { TextItem } from '../models/text-item.model';
import { TextLine } from '../models/text-line.model';
import { WordInfoModel } from '../models/word-info.model';

@Injectable({
    providedIn: 'root'
})
export class WordsApiService {
    constructor() { }

    getSong(songId: string): Observable<Song> {
        return of(this.song);//.pipe(delay(2000));
    }

    getDistinctWords(songId: string): Observable<TextItem[]> {
        return of(this.distinctWords);//.pipe(delay(2000));
    }

    getLines(songId: string): Observable<TextLine[]> {
        return of(this.textLines);//.pipe(delay(2000));
    }

    getWordInfo(wordId: string): Observable<WordInfoModel> {
        return of(this.wordInfo).pipe(delay(2000));
    }

    // hardcoded data
    private song: Song = {
        id: '1',
        artist: 'Alter Bridge',
        songName: 'Broken Wings',
        videoUrl: 'https://www.youtube.com/embed/1xICZAQ7GBQ',
        wordCount: 24,
        uniqueWordCount: 17,
    }

    private distinctWords: TextItem[] = [
        { wordId: '1', isInDictionary: false, content: 'fight', isPunctuation: false },
        { wordId: '1', isInDictionary: false, content: 'the', isPunctuation: false },
        { wordId: '1', isInDictionary: false, content: 'alone', isPunctuation: false },
        { wordId: '1', isInDictionary: true, content: 'when', isPunctuation: false },
        { wordId: '1', isInDictionary: true, content: 'world', isPunctuation: false },
        { wordId: '1', isInDictionary: false, content: 'is', isPunctuation: false },
        { wordId: '1', isInDictionary: true, content: 'full', isPunctuation: false },
        { wordId: '1', isInDictionary: false, content: 'of', isPunctuation: false },
        { wordId: '1', isInDictionary: false, content: 'victims', isPunctuation: false },
    ]

    private wordInfo = new WordInfoModel({ translates: ['перевод1', 'перевод2', 'перевод3'] })

    private textLines: TextLine[] = [
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'fight', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'the', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'fight', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'alone', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: true, content: 'when', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'the', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: true, content: 'world', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'is', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: true, content: 'full', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'of', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'victims', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'dims', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'a', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'fading', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'light', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'in', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'our', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'souls', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'fight', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'the', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'fight', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'alone', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: true, content: 'when', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'the', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: true, content: 'world', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'is', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: true, content: 'full', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'of', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'victims', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'dims', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'a', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'fading', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'light', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'in', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'our', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'souls', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'fight', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'the', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'fight', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'alone', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: true, content: 'when', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'the', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: true, content: 'world', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'is', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: true, content: 'full', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'of', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'victims', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'dims', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'a', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'fading', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'light', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'in', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'our', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'souls', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'fight', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'the', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'fight', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'alone', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: true, content: 'when', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'the', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: true, content: 'world', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'is', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: true, content: 'full', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'of', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'victims', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'dims', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'a', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'fading', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'light', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'in', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'our', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'souls', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'fight', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'the', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'fight', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'alone', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: true, content: 'when', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'the', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: true, content: 'world', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'is', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: true, content: 'full', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'of', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'victims', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'dims', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'a', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'fading', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'light', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'in', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'our', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'souls', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'fight', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'the', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'fight', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'alone', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: true, content: 'when', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'the', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: true, content: 'world', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'is', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: true, content: 'full', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'of', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'victims', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'dims', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'a', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'fading', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'light', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'in', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'our', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'souls', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'fight', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'the', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'fight', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'alone', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: true, content: 'when', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'the', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: true, content: 'world', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'is', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: true, content: 'full', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'of', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'victims', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'dims', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'a', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'fading', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'light', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'in', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'our', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'souls', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'fight', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'the', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'fight', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'alone', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: true, content: 'when', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'the', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: true, content: 'world', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'is', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: true, content: 'full', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'of', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'victims', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'dims', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'a', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'fading', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'light', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'in', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'our', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'souls', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'fight', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'the', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'fight', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'alone', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: true, content: 'when', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'the', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: true, content: 'world', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'is', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: true, content: 'full', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'of', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'victims', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'dims', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'a', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'fading', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'light', isPunctuation: false },
            ]
        },
        {
            items: [
                { wordId: '1', isInDictionary: false, content: 'in', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'our', isPunctuation: false },
                { wordId: '1', isInDictionary: false, content: ' ', isPunctuation: true },
                { wordId: '1', isInDictionary: false, content: 'souls', isPunctuation: false },
            ]
        }];
}
