/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { FormularioEditarJugadorPageModule } from './formulario-editar-jugador/formulario-editar-jugador.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
      },
      {
        path: 'tab1',
        children:[
          {
            path:'',
            loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule),
          },
          {
            path: 'formulario',
            loadChildren: () => import('./formulario-jugador/formulario-jugador.module').then( m => m.FormularioJugadorPageModule)
          },
          {
            path: 'formularioeditar/:id',
            loadChildren: () => import('./formulario-editar-jugador/formulario-editar-jugador.module').then( m => m.FormularioEditarJugadorPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('./detalle-jugador/detalle-jugador.module').then( m => m.DetalleJugadorPageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children:[
          {
            path: '',
            loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
          },
          {
            path: 'formulariopartido',
            loadChildren: () => import('./formulario-partido/formulario-partido.module').then( m => m.FormularioPartidoPageModule)
          },
        ]
      },
      {
        path: 'tab3',
        children:[
          {
            path: '',
            loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
          },
          {
            path: 'formularioequipo',
            loadChildren: () => import('./formulario-equipo/formulario-equipo.module').then( m => m.FormularioEquipoPageModule)
          },
        ]
      },
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
