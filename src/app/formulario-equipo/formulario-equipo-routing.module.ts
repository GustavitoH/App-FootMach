import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioEquipoPage } from './formulario-equipo.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioEquipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioEquipoPageRoutingModule {}
