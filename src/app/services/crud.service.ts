import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CrudService {
    citas: string[] = [
        'Me gusta cuando un plan va sin problemas.',
        'Aunque sé que es virtual, este bistec es suculento.',
        'Soy demasiado viejo para esto.',
        'Me siento como un corazón que ama a toda la tierra.',
        'Conociendo la desgracia yo mismo, sé cómo ayudar a los desgraciados.'
    ];

    constructor() { }

    getCitas() {
        return this.citas;
    }
    deleteCitas(indiceDeLaCitas: number) {
        this.citas.splice(indiceDeLaCitas, 1);
        return this.citas;
    }
    addCita(cita: string) {
        this.citas.push(cita);
        return this.citas;
    }
    updateCitas(indiceDeLaCitas: number, cita: string) {
        this.citas[indiceDeLaCitas] = cita;
        return this.citas;
    }
}
