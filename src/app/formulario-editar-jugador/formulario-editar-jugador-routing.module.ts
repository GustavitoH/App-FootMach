import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioEditarJugadorPage } from './formulario-editar-jugador.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioEditarJugadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioEditarJugadorPageRoutingModule {}
