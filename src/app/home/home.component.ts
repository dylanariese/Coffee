import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ListViewEventData } from "nativescript-ui-listview";

import { Item } from "../data/item.model";
import { DataService } from "../data/data";
import { UserService } from "../shared/user.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"

})
export class HomeComponent implements OnInit {
    items: Array<Item>;
    userName: string = "hallo";

    @ViewChild("listView") listViewRef: ElementRef;

    constructor(
        private routerExtensions: RouterExtensions,
        private dataService: DataService,
        private userService: UserService
    ) { }

    ngOnInit(): void {
        console.log('calling init');
        this.items = this.dataService.getItems();
        // this.userName = this.userService.getUser().name;
        console.log('user ', this.userName);
    }

    toggleAccept(item: Item, accept: boolean) {
        console.log('item: ', item.name);
        console.log('accepted: ', accept);
    }

    logout() {
        this.userService.logout();

        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    }

    add() {
        const urls = this.dataService.getImages();
        const names = this.dataService.getNames();
        const image = urls[Math.floor(Math.random() * urls.length)];
        const name = names[Math.floor(Math.random() * names.length)];
        const previous = this.items[this.items.length - 1];
        const next = ++previous.id;
        const dat = this.randomDate(new Date(2012, 0, 1), new Date());
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'];

        let item = <Item>{
            id: next,
            name: `Coffee afspraak ${next}`,
            src: image,
            description: `${name} - ${dat.getDay() + 1} ${months[dat.getMonth()]} @ ${dat.getHours()}:${dat.getMinutes()}`,
        };

        this.items.push(item);
        this.listViewRef.nativeElement.scrollToIndex((this.items.length - 1), true);
    }

    randomDate = (start: any, end: any) =>
        new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

    onPullToRefreshInitiated = (listView: ListViewEventData) => new Promise((resolve) =>
        resolve(this.dataService.getItems())).then((result: Array<Item>) => {
            this.items = result;

            listView.object.notifyPullToRefreshFinished(true);
        }).catch(error => console.log(error));
}
