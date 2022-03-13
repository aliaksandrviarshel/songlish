import { Component, OnInit } from '@angular/core';

@Component({ template: '' })
export abstract class TableComponent<T = any> implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    protected initColumns(columns: string[]): void {

    }
}
