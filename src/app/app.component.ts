import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Songlish';

    // private readonly routesWithoutFooter: string[] = [
    //     '/word-adding',
    //     '/card-training'
    // ];

    private readonly routesWithoutHeader: string[] = [
        '/card-training'
    ];

    // get isFooterDisplayed() {
    //     return !this.routesWithoutFooter.some(x => this.router.url.includes(x));
    // }

    get isHeaderDisplayed() {
        return !this.routesWithoutHeader.some(x => this.router.url.includes(x));
    }

    constructor(private router: Router) { }
}
