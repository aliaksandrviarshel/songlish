import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';

@Component({
    selector: 'sng-confirm-menu',
    templateUrl: './confirm-menu.component.html',
    styleUrls: ['./confirm-menu.component.scss']
})
export class ConfirmMenuComponent {
    @Input() message;

    @Output() reply = new EventEmitter<boolean>();

    @ViewChild('menu', { read: MatMenu }) menu: MatMenu;

    onReply(event$): void {
        this.reply.emit(event$);
    }
}
