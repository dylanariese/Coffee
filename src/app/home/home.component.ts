import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { Item } from "../data/item.model";
import { DataService } from "../data/data";
import { ListViewEventData } from "nativescript-ui-listview";

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

    notifyPullToRefreshFinished() {
        console.log('finished!');
    }

    onPullToRefreshInitiated(args: ListViewEventData) {
        setTimeout(function () {
            const listView = args.object;

            listView.notifyPullToRefreshFinished();
        }, 1000);
    }
}
