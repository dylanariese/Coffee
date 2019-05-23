import { Injectable } from "@angular/core";

import { Item } from "../shared/item.model";
import { User } from "../shared/user.model";

@Injectable()
export class DataService {
    getItems(): Array<Item> {
        return [{
            id: 1,
            name: "Coffee afspraak Dylan",
            src: "~/images/coffee/inline_image_preview.jpg",
            description: "24 Mei om 14:00",
            users: [
                { name: 'Joffrey' },
                { name: 'Roland' },
                { name: 'Jan Jansen' }
            ],
            status: true
        },
        {
            id: 2,
            name: "Coffee afspraak Roland",
            src: "~/images/coffee/2822746_stock-photo-coffee.jpg",
            description: "25 Mei om 16:15",
            users: [
                { name: 'Joris' },
                { name: 'Bas' }
            ],
            status: false
        },
        {
            id: 3,
            name: "Coffee afspraak Joris",
            src: "~/images/coffee/coffee-geneva-switzerland.jpg",
            description: "26 Mei om 11:30",
            users: [
                { name: 'Bas' },
                { name: 'Joffrey' },
                { name: 'Jan Jansen' }
            ],
            status: true
        },
        {
            id: 4,
            name: "Coffee afspraak Joffrey",
            src: "~/images/coffee/1.jpg",
            description: "27 Mei om 13:45",
            users: [
                { name: 'Roland' },
                { name: 'Joris' }
            ],
            status: false
        }];
    }

    getImages(): Array<string> {
        const images = [
            "~/images/coffee/1.jpg",
            "~/images/coffee/inline_image_preview.jpg",
            "~/images/coffee/coffee-geneva-switzerland.jpg",
            "~/images/coffee/2822746_stock-photo-coffee.jpg",
            "~/images/coffee/images.jpg",
            "~/images/coffee/inline_image_preview.jpg",
            "~/images/coffee/istockphoto-504984010-612x612.jpg",
            "~/images/coffee/istockphoto-856004690-612x612.jpg",
            "~/images/coffee/Kopitoraja-323.jpg",
            "~/images/coffee/preview-1.jpg",
            "~/images/coffee/preview-2.jpg",
            "~/images/coffee/stock-photo-close-up-of-espresso-pouring-from-coffee-machine-professional-coffee-brewing-278456510.jpg",
        ];

        return images;
    }

    getNames(): Array<string> {
        const names = [
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

        return names;
    }
}
