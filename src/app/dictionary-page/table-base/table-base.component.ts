import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HaveId } from './interfaces/have-id';

@Component({
    selector: 'sng-table-base',
    templateUrl: './table-base.component.html',
    styleUrls: ['./table-base.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed, void', style({ height: '0px' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
        ])
    ],
})
export class TableBaseComponent<T extends HaveId> implements OnInit {
    @Input()
    public set disableDelete(v: boolean) {
        if (v) {
            this.defaultColumns = []
        }

        this._disableDelete = v;
    }
    public get disableDelete(): boolean {
        return this._disableDelete;
    }
    private _disableDelete: boolean;


    @Input()
    public set confirmDeleteMessage(v: string) {
        this._confirmDeleteMessage = v ?? 'Удалить?';
    }
    public get confirmDeleteMessage(): string {
        return this._confirmDeleteMessage;
    }
    private _confirmDeleteMessage: string;

    @Input()
    public set items(v: T[]) {
        this.dataSource.data = v ?? [];
        this._items = v;
    }
    private _items: T[];
    public get items(): T[] {
        return this._items;
    }

    @Input()
    public set filterValue(v: string) {
        if (this.dataSource) {
            this.dataSource.filter = v
        }
    }

    @Output() delete = new EventEmitter<string>();

    @Output() expand = new EventEmitter<string>();

    @ContentChild('expandedTile', { static: false }) expandedTileTemplateRef: TemplateRef<any>;

    @ContentChild('tile', { static: false }) tileTemplateRef: TemplateRef<any>;

    dataSource: MatTableDataSource<T>;

    customColumns: string[] = ['main'];

    deletingItemId: string;

    defaultColumns: string[] = ['actions'];

    columns = [];

    constructor() {
        this.dataSource = new MatTableDataSource();
    }

    ngOnInit(): void {
        this.columns = this.customColumns.concat(this.defaultColumns);
        this.dataSource = new MatTableDataSource(this.items);
    }

    onDelete(id: string) {
        this.delete.emit(id);
    }

    onExpand(id: string) {
        this.expand.emit(id);
    }
}
