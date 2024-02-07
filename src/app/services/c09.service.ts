import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class C09Service {

    bien = false;

    constructor() { }

    tenis() {
        this.bien = !this.bien;
        if (this.bien) {
            return "ace";
        } else {
            return "out";
        }
    }
}
