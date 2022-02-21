import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../utils/api.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-jugador',
  templateUrl: './formulario-jugador.page.html',
  styleUrls: ['./formulario-jugador.page.scss'],
})
export class FormularioJugadorPage implements OnInit {
  private lista: Array<any>;
  private img: string;

  constructor(
    private apiService: ApiService,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.apiService.get('equipos').then(res => {
      this.lista = res.data.equipos;
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
  imagen(event) {
    const text = event.target.value;
    this.img = text;
  }
  insertar(evento){
    this.apiService.post('jugadores', evento.value).then(e => {
      if (e.data.estado) {
        this.presentToast(e.data.message, 'success');
        this.router.navigate(['/tabs/tab1']);
      } else {
        this.presentToast(e.data.message, 'danger');
      }
    });
  }
}
