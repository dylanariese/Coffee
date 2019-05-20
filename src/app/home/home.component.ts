import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { Item } from "../data/item.model";
import { DataService } from "../data/data";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: Array<Item>;

    constructor(private dataService: DataService) {

    }

    ngOnInit(): void {
        this.items = this.dataService.getItems();
    }

    toggleAccept(item: Item, accept: boolean) {
        console.log('accepted: ', accept);
    }

    categoryIcon(category: string) {
        console.log('categoryItem called!');

        switch (category) {
            case "Burger":
                console.log('called!');
                return String.fromCharCode(0xf0f5); //"fa-cutlery";
            case "Beer":
                console.log('called!');
                return String.fromCharCode(0xf0fc); //"fa-beer";
            case "Pancake":
                console.log('called!');
                return String.fromCharCode(0xf0f4); //"fa-coffee";
            case "Cake":
                console.log('called!');
                return String.fromCharCode(0xf1fd); //"fa-birthday-cake";
            default:
                return String.fromCharCode(0xf06d); //"fa-fire";
        }
    }
}
