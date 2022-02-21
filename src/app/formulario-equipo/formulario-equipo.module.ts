import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioEquipoPageRoutingModule } from './formulario-equipo-routing.module';

import { FormularioEquipoPage } from './formulario-equipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioEquipoPageRoutingModule
  ],
  declarations: [FormularioEquipoPage]
})
export class FormularioEquipoPageModule {}
