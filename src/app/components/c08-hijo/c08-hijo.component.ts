import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-c08-hijo',
    templateUrl: './c08-hijo.component.html',
    styleUrls: ['./c08-hijo.component.css']
})
export class C08HijoComponent {
    @Input() parametro = "Luke";
    @Input() parametro2 = { nombre: '', apellido: '' };

    @Output() unEvento = new EventEmitter();
    unClicEnElBoton() {
        this.unEvento.emit("¡Hola!");
    }
}
