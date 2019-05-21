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

    getImages(): Array<string> {
        const images = [
            "~/images/1.jpg",
            "~/images/inline_image_preview.jpg",
            "~/images/coffee-geneva-switzerland.jpg",
            "~/images/2822746_stock-photo-coffee.jpg",
            "~/images/images.jpg",
            "~/images/inline_image_preview.jpg",
            "~/images/istockphoto-504984010-612x612.jpg",
            "~/images/istockphoto-856004690-612x612.jpg",
            "~/images/Kopitoraja-323.jpg",
            "~/images/preview-1.jpg",
            "~/images/preview-2.jpg",
            "~/images/stock-photo-close-up-of-espresso-pouring-from-coffee-machine-professional-coffee-brewing-278456510.jpg",            
        ];

        return images;
    }

    getNames(): Array<string> {
        const images = [
            "Dylan Ariese",
            "Joffrey Schoonheijn",
            "Roland Derks",
            "Joris Jolles",
            "Henk op 't Einde",
            "Stefan Koldewijn",
            "Manon Zorge",
            "Rudi Boer",
            "Bas Goedhart",
            "Saskia Brand",
            "Gert de Best"
        ];

        return images;
    }
}
