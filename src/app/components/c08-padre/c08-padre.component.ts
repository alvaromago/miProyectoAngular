import { Component } from '@angular/core';

@Component({
    selector: 'app-c08-padre',
    templateUrl: './c08-padre.component.html',
    styleUrls: ['./c08-padre.component.css']
})
export class C08PadreComponent {
    unaVariableString = 'Una cadena de caracteres en una variable';
    personaje = { nombre: 'Clark', apellido: 'Kent' };
    mensajeDelHijo = "";
}
