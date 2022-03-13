import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {
    transform(text: string, search: string): string {
        const pattern = search;
        const regex = new RegExp(pattern, 'gi');
        const match = text.match(regex);
        if (!match) {
            return text;
        }

        return search ? text.replace(regex, (match) => `<span class="highlight">${match}</span>`) : text;
    }

    // private getTagName(property: string): string {
    //     switch (property) {
    //         case 'bold':

    //             break;
    //             case: 'normal':
    //             return 'span'

    //         default:
    //             break;
    //     }

    // }
}
