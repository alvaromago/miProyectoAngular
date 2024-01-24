import { Component, OnInit } from '@angular/core';

@Component({
    selector: "app-c07",
    templateUrl: "./c07.component.html",
    styleUrls: ["./c07.component.css"],
})

export class C07Component implements OnInit {
    ngOnInit(): void { }
    constructor() { }

    mensaje = "El mundo de los Pokemon se divide en dos categorías: los que tienen una pistola cargada y los que cavan. Tú esres un Pokemon que cava.";
    numPi = 3.14159265358979323846264338379;
    unaCifraPorcentaje = 0.123456789;
    teslaM3 = 48600;
    hoy = Date.now();
    unObjeto = {
        2: 'espacio', 1: 'espíritu', 6: 'alma', 4: 'realidad', 3: 'tiempo', 5: 'poder'
    };
    unDiccionario = new Map([[2, 'espacio'], [1, 'espíritu'], [6, 'alma'], [4, 'realidad'], [3,
        'tiempo'], [5, 'poder']]);
    unaCadenaDeCaracteres = 'Esta cadena de caracteres es demasiado, pero demasiado larga para solo decir esto';
    unArray = ['La Cena', 'Mona Lisa', 'La joven de la perla', 'La ronda de noche'];
    unNuevoObjeto = {
        Azorius: { color1: 'blanco', color2: 'azul' },
        Dimir: { color1: 'azul', color2: 'negro' },
        Rakdos: { color1: 'rojo', color2: 'negro' },
        Gruul: { color1: 'rojo', color2: 'verde' },
        Selesnya: { color1: 'verde', color2: 'blanco' },
        Orzhov: { color1: 'blanco', color2: 'negro' },
        Izzet: { color1: 'azul', color2: 'rojo' },
        Golgari: { color1: 'negro', color2: 'verde' },
        Boros: { color1: 'rojo', color2: 'blanco' },
        Simic: { color1: 'verde', color2: 'azul' }
    };
}
