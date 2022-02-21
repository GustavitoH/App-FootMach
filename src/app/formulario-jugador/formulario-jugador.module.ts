import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioJugadorPageRoutingModule } from './formulario-jugador-routing.module';

import { FormularioJugadorPage } from './formulario-jugador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioJugadorPageRoutingModule
  ],
  declarations: [FormularioJugadorPage]
})
export class FormularioJugadorPageModule {}
