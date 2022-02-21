import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioPartidoPageRoutingModule } from './formulario-partido-routing.module';

import { FormularioPartidoPage } from './formulario-partido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioPartidoPageRoutingModule
  ],
  declarations: [FormularioPartidoPage]
})
export class FormularioPartidoPageModule {}
