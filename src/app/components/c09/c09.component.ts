import { Component, OnInit } from '@angular/core';
import { C09Service } from 'src/app/services/c09.service';
import { CrudService } from 'src/app/services/crud.service';

@Component({
    selector: 'app-c09',
    templateUrl: './c09.component.html',
    styleUrls: ['./c09.component.css']
})
export class C09Component implements OnInit {
    mensaje = "";
    citas: string[] = [];

    constructor(private unServicio: C09Service, private crud: CrudService) { }

    ngOnInit() {
    }

    clicEnElBoton() {
        this.mensaje = this.unServicio.tenis();
    }

    muestra() {
        this.citas = this.crud.getCitas();
    }

    suprime(indice: number) {
        this.citas = this.crud.deleteCitas(indice);
    }
}
