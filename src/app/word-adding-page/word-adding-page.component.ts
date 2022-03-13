import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ObserverComponent } from '../+shared/abstract/observer-component';
import { Song } from './models/song.model';
import { TextItem } from './models/text-item.model';
import { TextLine } from './models/text-line.model';
import { WordToAddModel } from './models/word-to-add.model';
import { AddTranslate, AddWord, GetDistinctWords, RemoveTranslate, RemoveWord } from './state/word-adding.actions';
import { WordAddingState } from './state/word-adding.state';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatTooltipDefaultOptions, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
    showDelay: 1500,
    hideDelay: 0,
    touchendHideDelay: 0
};

@Component({
    selector: 'sng-word-adding-page',
    templateUrl: './word-adding-page.component.html',
    styleUrls: ['./word-adding-page.component.scss'],
    providers: [{ provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }]
})
export class WordAddingPageComponent extends ObserverComponent {
    @Select(WordAddingState.song) song$: Observable<Song>;

    @Select(WordAddingState.words) distinctWords$: Observable<TextItem[]>;

    @Select(WordAddingState.lines) textLines$: Observable<TextLine[]>;

    @Select(WordAddingState.addedWords) addedWords$: Observable<WordToAddModel[]>;

    songId: string;

    isMobile: boolean = false;

    addedWords: WordToAddModel[];

    isSelected(word: TextItem): boolean {
        return this.addedWords.some(x => x.foreign === word.content);
    }

    constructor(private store: Store) {
        super();
    }

    // TODO: перенести isMobile в глобальную переменную или в state
    override ngOnInit(): void {
        super.ngOnInit();

        if (window.screen.width <= 400) {
            this.isMobile = true;
        }

        // TODO: не работает
        window.addEventListener('resize', (_) => {
            if (window.screen.width <= 400) {
                this.isMobile = true;
                return;
            }

            this.isMobile = false;
        }, true);
    }

    override ngOnDestroy(): void {
        super.ngOnDestroy();
    }

    onWordAdd(word: TextItem): void {
        // this.addedWords.push(word);
        this.store.dispatch(new AddWord(word.wordId, word.content));
    }

    onWordRemove(indexOrItem: number | TextItem): void {
        if (typeof indexOrItem === 'number') {
            const index = indexOrItem as number;
            if (index >= this.addedWords.length) {
                return;
            }

            this.store.dispatch(new RemoveWord(this.addedWords[index].foreign));

            return;
        }

        const item = indexOrItem as TextItem;

        const result = this.addedWords.find(x => x.foreign?.toLowerCase() === item.content?.toLowerCase());
        if (!result) {
            return;
        }

        this.store.dispatch(new RemoveWord(result.foreign));
    }

    readonly separatorKeysCodes = [ENTER, COMMA] as const;
    readonly maxTranslatesAmount = 5 as const;
    onTranslateRemove(foreign: string, translate: string): void {
        this.store.dispatch(new RemoveTranslate(foreign, translate));
    }

    onTranslateAdd($event: MatChipInputEvent, translate: string): void {
        if (!($event.value || '').trim()) {
            $event.chipInput.clear();
            return;
        }

        this.store.dispatch(new AddTranslate(translate, $event.value));
    }

    // TODO: get rid of this kastyl'
    private distinctWordsAreEmpty = true;
    onTabChange($event: MatTabChangeEvent): void {
        switch ($event.index) {
            case 0:
                // text is getting by default
                break;
            case 1:
                if (this.distinctWordsAreEmpty) {
                    this.store.dispatch(new GetDistinctWords(this.songId));
                    this.distinctWordsAreEmpty = false;
                }
                break;
            default:
                break;
        }
    }

    protected initSubscriptions(): void {
        this.subscriptions.push(
            this.addedWords$.subscribe(items => {
                this.addedWords = items;
            }),
            this.song$.subscribe(item => {
                this.songId = item?.id;
            })
        )
    }

    lyrics = `Fight the fight alone
  When the world is full of victims
  Dims a fading light
  In our souls
  Leave the peace alone
  Now we all are slowly changing
  Dims a fading light
  In our souls
  In my opinion seeing is to know
  The things we hold
  Are always first to go
  And who's to say
  We won't end up alone
  On broken wings I'm falling
  And it won't be long
  The skin on me is burning
  By the fires of the sun
  On skinned knees
  I'm bleeding
  And it won't be long
  I've got to find that meaning
  I'll search for so long
  Cry ourselves to sleep
  We will sleep alone forever
  Will you lay me down
  In the same place with all I love
  Mend the broken homes
  Care for them they are our brothers
  Save the fading light in our souls
  In my opinion seeing is to know
  What you give
  Will always carry you
  And who's to say
  We won't survive it too
  On broken wings I'm falling
  And it won't be long
  The skin on me is burning
  By the fires of the sun
  On skinned knees
  I'm bleeding
  And it won't be long
  I've got to find that meaning
  I'll search for so long
  Set a-free all
  Relying on their will
  To make me all that I am
  And all that I'll be
  Set a-free all
  Will fall between the cracks
  With memories of all that I am
  And I'll that I'll be
  On broken wings I'm falling
  And it won't be long
  The skin on me is burning
  By the fires of the sun
  On skinned knees
  I'm bleeding
  And it won't be long
  I've got to find that meaning
  I'll search for so long`;
}
