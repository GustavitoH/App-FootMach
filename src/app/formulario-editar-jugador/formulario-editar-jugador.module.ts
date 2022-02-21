import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioEditarJugadorPageRoutingModule } from './formulario-editar-jugador-routing.module';

import { FormularioEditarJugadorPage } from './formulario-editar-jugador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioEditarJugadorPageRoutingModule
  ],
  declarations: [FormularioEditarJugadorPage]
})
export class FormularioEditarJugadorPageModule {}
