import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MpcComponent } from './components/mpc/mpc.component';
import { MscComponent } from './components/msc/msc.component';

@NgModule({
  declarations: [
    AppComponent,
    MpcComponent,
    MscComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
