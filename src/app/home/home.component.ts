import { Component, OnInit, ViewChild, NgZone } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ListViewEventData } from "nativescript-ui-listview";
import { RadListViewComponent } from "nativescript-ui-listview/angular/listview-directives";
import { ios, iOSApplication } from "tns-core-modules/application/application";
import * as dialogs from "tns-core-modules/ui/dialogs";

import { Item } from "../shared/models/item.model";
import { DataService } from "../shared/data.service";
import { UserService } from "../shared/user.service";
import { User } from "../shared/models/user.model";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: Array<Item>;
    username: string = "hallo";
    _ios: iOSApplication;

    @ViewChild("listView") listViewRef: RadListViewComponent;

    constructor(
        private routerExtensions: RouterExtensions,
        private dataService: DataService,
        private userService: UserService
    ) { }

    ngOnInit(): void {
        var user = this.userService.getUser();
        this.username = user ? this.userService.getUser().name : "Anoniem";
        this._ios = ios;
        this.items = this.dataService.getItems();

        this.setAppointments();
    }

    setAppointments() {
        this.items.forEach(item => {
            item.status = item.users.some(x => x.name === this.username);
        });
    }

    toggleAccept(item: Item, accept: boolean) {
        const user = this.userService.getUser();

        if (!user) {
            dialogs.alert({
                title: "Foutmelding",
                message: "U bent niet ingelogd en wordt doorverwezen naar de inlog pagina.",
                okButtonText: "Ok"
            }).then(() => {
                this.logout();
            });

            return;
        }

        if (accept) {
            if (item.users.some(x => x.name === user.name)) {
                return;
            }

            item.users.push(user);
        } else {
            const idx = item.users.findIndex(x => x.name === user.name);

            if (idx === -1) {
                return;
            }

            item.users.splice(idx, 1);
        }

        this.toggleStatus(item);
    }

    toggleStatus = (item: Item) =>
        item.status = !item.status;

    logout() {
        this.userService.logout();

        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    }

    add() {
        const urls = this.dataService.getImages();
        const names = this.dataService.getNames().filter(name => name !== this.username);
        const image = urls[Math.floor(Math.random() * urls.length)];
        const name = names[Math.floor(Math.random() * names.length)];
        const previous = this.items[this.items.length - 1];
        const next = ++previous.id;
        const dat = this.randomDate(new Date(2012, 0, 1), new Date());
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'];

        let item = <Item>{
            id: next,
            name: `Coffee afspraak ${name}`,
            src: image,
            description: `${dat.getDay() + 1} ${months[dat.getMonth()]} om ${dat.getHours()}:${dat.getMinutes()}`,
            users: [
                <User>{ name: names[Math.floor(Math.random() * names.length)] },
                <User>{ name: names[Math.floor(Math.random() * names.length)] }
            ]
        };

        this.items.push(item);

        setTimeout(() => {
            this.listViewRef.listView.scrollToIndex(this.items.length - 1, true);
        }, 100);
    }

    getUsers(item: Item) {
        if (!item.users) {
            console.log('no users found!');

            return;
        }

        return item.users.map(x => x.name);
    }

    randomDate = (start: any, end: any) =>
        new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

    onPullToRefreshInitiated = (listView: ListViewEventData) => new Promise((resolve) =>
        resolve(this.dataService.getItems())).then((result: Array<Item>) => {
            this.items = result;

            this.setAppointments();

            listView.object.notifyPullToRefreshFinished(true);
        }).catch(error => console.log(error));
}
