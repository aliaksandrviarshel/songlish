import SwiperCore, { Navigation, Swiper } from "swiper";
import { Component, ViewEncapsulation, ViewChild, OnInit, ElementRef, Input, Output, EventEmitter } from "@angular/core";
import { WordCardModel } from "../models/word-card.model";

SwiperCore.use([Navigation]);

@Component({
    selector: 'sng-cards-swiper',
    templateUrl: './cards-swiper.component.html',
    styleUrls: ['./cards-swiper.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CardsSwiperComponent implements OnInit {
    @Input() words: WordCardModel[];

    @Output() indexChanged = new EventEmitter<number>();

    @ViewChild('swiper', { read: ElementRef }) swiper: ElementRef;

    @ViewChild('card') card: any;

    cardIsFlipped: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    onCardFlip(): void {
        if (this.cardIsFlipped) {
            this.swipeNext();
        }

        this.cardIsFlipped = !this.cardIsFlipped;
    }

    onSlideChange(event$: Swiper[]) {
        this.indexChanged.emit(event$[0].activeIndex)
    }

    private swipeNext(): void {
        this.swiper.nativeElement.swiper.slideNext();
    }
}
