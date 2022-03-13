import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

@Component({ template: '' })
export abstract class ObserverComponent implements OnInit, OnDestroy {
    protected subscriptions: Subscription[] = [];

    ngOnInit(): void {
        this.initSubscriptions();
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(x => {
            x.unsubscribe();
        });

        this.subscriptions = null;
    }

    protected abstract initSubscriptions(): void;
}
