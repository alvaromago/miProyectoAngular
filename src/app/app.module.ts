import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MpcComponent } from './components/mpc/mpc.component';
import { MscComponent } from './components/msc/msc.component';
import { C06Component } from './components/c06/c06.component';
import { C07Component } from './components/c07/c07.component';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { C08HijoComponent } from './components/c08-hijo/c08-hijo.component';
import { C08PadreComponent } from './components/c08-padre/c08-padre.component';


registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    MpcComponent,
    MscComponent,
    C06Component,
    C07Component,
    C08HijoComponent,
    C08PadreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
