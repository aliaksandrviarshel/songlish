import SwiperCore, { Navigation, Swiper } from "swiper";
import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import { SongLinesModel } from "./interfaces/song-lines.model";

SwiperCore.use([Navigation]);

@Component({
    selector: 'sng-song-lines-swiper',
    templateUrl: './song-lines-swiper.component.html',
    styleUrls: ['./song-lines-swiper.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SongLinesSwiperComponent implements OnInit {
    @Input() linesModels: SongLinesModel[];

    @Input() word: string;

    constructor() { }

    ngOnInit(): void {
    }
}
