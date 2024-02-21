import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-c11',
    templateUrl: './c11.component.html',
    styleUrls: ['./c11.component.css']
})
export class C11Component implements OnInit {

    miFormulario = new FormGroup({
        nombre: new FormControl("", [Validators.required, Validators.minLength(2),
        Validators.maxLength(25)]),
        color: new FormControl("", Validators.required),
        adulto: new FormControl("", Validators.required)
    });
    constructor() { }
    ngOnInit() {
    }
}