import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../utils/api.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-editar-jugador',
  templateUrl: './formulario-editar-jugador.page.html',
  styleUrls: ['./formulario-editar-jugador.page.scss'],
})
export class FormularioEditarJugadorPage implements OnInit {
  private lista: Array<any>;
  private img: string;
  private jugador: any;
  private id: string;
  private foto;
  private nombre;
  private apellido;
  private numero;
  private goles;
  private edad;
  private equipo;

  constructor(
    private apiService: ApiService,
    private toastController: ToastController,
    private router: Router,
    private rutaActiva: ActivatedRoute
  ) { }

  ngOnInit() {
    this.apiService.get('equipos').then(res => {
      this.lista = res.data.equipos;
    });
    this.id = this.rutaActiva.snapshot.params.id;
    this.apiService.getId('jugador', this.id).then(e => {
      this.jugador = e.data.jugador[0];
      this.foto = this.jugador.foto;
      this.nombre = this.jugador.nombre;
      this.apellido = this.jugador.apellido;
      this.numero = this.jugador.numero;
      this.goles = this.jugador.goles;
      this.edad = this.jugador.edad;
      this.equipo = this.jugador.equipo;
    });
  }
  async presentToast(msg, colort) {
    const toast = await this.toastController.create({
      color: colort,
      message: msg,
      duration: 1000
    });
    toast.present();
  }
  editar(event){
    this.apiService.put('jugadores', this.id, event.value).then(e => {
      if (e.data.estado) {
        this.presentToast(e.data.message, 'success');
        this.router.navigate(['/tabs/tab1']);
      } else {
        this.presentToast(e.data.message, 'success');
      }
    });
  }
  imagen(event) {
    const text = event.target.value;
    this.img = text;
  }
}
