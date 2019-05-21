import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ListViewEventData } from "nativescript-ui-listview";

import { Item } from "../data/item.model";
import { DataService } from "../data/data";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: Array<Item>;

    constructor(private routerExtensions: RouterExtensions, private dataService: DataService) { }

    ngOnInit(): void {
        this.items = this.dataService.getItems();
    }

    toggleAccept(item: Item, accept: boolean) {
        console.log('accepted: ', accept);
    }

    logout() {
        //todo: call logout service

        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    }

    onPullToRefreshInitiated = (args: ListViewEventData) =>
        new Promise((resolve) => resolve(this.dataService.getItems())).then((result: Array<Item>) => {
            this.items = result;

            const listView = args.object;

            listView.notifyPullToRefreshFinished(true);
        }).catch(error => console.log(error));
}
