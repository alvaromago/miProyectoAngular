import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MpcComponent } from './components/mpc/mpc.component';
import { MscComponent } from './components/msc/msc.component';
import { C06Component } from './components/c06/c06.component';
import { C07Component } from './components/c07/c07.component';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { C08HijoComponent } from './components/c08-hijo/c08-hijo.component';
import { C08PadreComponent } from './components/c08-padre/c08-padre.component';
import { C0901Component } from './components/c0901/c0901.component';
import { C0902Component } from './components/c0902/c0902.component';
import { C09Component } from './components/c09/c09.component';
import { C10Component } from './components/c10/c10.component';
import { C11Component } from './components/c11/c11.component';


registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    MpcComponent,
    MscComponent,
    C06Component,
    C07Component,
    C08HijoComponent,
    C08PadreComponent,
    C0901Component,
    C0902Component,
    C09Component,
    C10Component,
    C11Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
