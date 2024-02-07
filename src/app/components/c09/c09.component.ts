import { Component, OnInit } from '@angular/core';
import { C09Service } from 'src/app/services/c09.service';

@Component({
    selector: 'app-c09',
    templateUrl: './c09.component.html',
    styleUrls: ['./c09.component.css']
})
export class C09Component {
    mensaje = "";
    constructor(private unServicio: C09Service) { }

    ngOnInit() {
    }

    clicEnElBoton() {
        this.mensaje = this.unServicio.tenis();
    }
}
