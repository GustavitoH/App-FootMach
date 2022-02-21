import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../utils/api.service';

@Component({
  selector: 'app-detalle-jugador',
  templateUrl: './detalle-jugador.page.html',
  styleUrls: ['./detalle-jugador.page.scss'],
})
export class DetalleJugadorPage implements OnInit {
  private id: number;
  private lista: any;
  private listaEquipo: any;
  private nombre: string;
  private apellido: string;
  private numero: string;
  private goles: string;
  private equipo: string;
  private foto: string;
  private edad: string;
  private escudo: string;
  private nombrequipo: string;

  constructor(
    private rutaActiva: ActivatedRoute,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.id = this.rutaActiva.snapshot.params.id;
    this.apiService.getId('jugador', this.id).then(e => {
      this.lista = e.data.jugador[0];
      this.nombre =  this.lista.nombre;
      this.apellido =  this.lista.apellido;
      this.numero =  this.lista.numero;
      this.goles =  this.lista.goles;
      this.equipo =  this.lista.equipo;
      this.foto =  this.lista.foto;
      this.edad =  this.lista.edad;
      this.apiService.getId('equipos', this.equipo).then(e => {
        this.listaEquipo = e.data.equipo[0];
        this.nombrequipo = this.listaEquipo.nombre;
        this.escudo = this.listaEquipo.escudo;
      });
    });
  }
}
