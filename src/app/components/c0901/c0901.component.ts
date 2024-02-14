import { Component, OnInit } from '@angular/core';
import { C0902Component } from "../c0902/c0902.component";

@Component({
    selector: 'app-c0901',
    providers: [C0902Component],
    templateUrl: './c0901.component.html',
    styleUrls: ['./c0901.component.css']
})
export class C0901Component implements OnInit {
    constructor(private unaDependencia: C0902Component) { }
    ngOnInit() {

    }
}
