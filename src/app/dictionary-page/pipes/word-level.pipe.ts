import { Pipe, PipeTransform } from '@angular/core';
import { WordLevel } from '../enums/word-level.enum';

@Pipe({
    name: 'wordLevel'
})
export class WordLevelPipe implements PipeTransform {
    transform(value: WordLevel): string {
        switch (value) {
            case WordLevel.A1:
                return 'A1';
            case WordLevel.A2:
                return 'A2';
            case WordLevel.B1:
                return 'B1';
            case WordLevel.B2:
                return 'B2';
            case WordLevel.C1:
                return 'C1';
            case WordLevel.C2:
                return 'C2';
            default:
                return '-';
        }
    }

}
