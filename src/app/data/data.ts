import { Injectable } from "@angular/core";

import { Item } from "../data/item.model";

@Injectable()
export class DataService {
    getItems(): Array<Item> {
        return [{
            id: 1,
            name: "Coffee afspraak één",
            src: "~/images/inline_image_preview.jpg",
            description: "Dylan Ariese - 24 Mei @ 14:00",
        },
        {
            id: 2,
            name: "Coffee afspraak twee",
            src: "~/images/2822746_stock-photo-coffee.jpg",
            description: "Roland Derks - 25 Mei @ 16:15",
        },
        {
            id: 3,
            name: "Coffee afspraak drie",
            src: "~/images/coffee-geneva-switzerland.jpg",
            description: "Joris Jolles - 26 Mei @ 11:30",
        },
        {
            id: 4,
            name: "Coffee afspraak vier",
            src: "~/images/1.jpg",
            description: "Joffrey Schoonheijm - 27 Mei @ 13:45",
        }];
    }
}
