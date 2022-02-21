import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../utils/api.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-partido',
  templateUrl: './formulario-partido.page.html',
  styleUrls: ['./formulario-partido.page.scss'],
})
export class FormularioPartidoPage implements OnInit {
  private lista: Array<any>;
  private imgLocal: string;
  private imgVisi: string;
  private horas: Array<string> = ['11:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
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
  insertar(event){
    this.apiService.post('partidos', event.value).then(e => {
      if (e.data.estado) {
        this.presentToast(e.data.message, 'success');
        this.router.navigate(['/tabs/tab2']);
      } else {
        this.presentToast(e.data.message, 'danger');
      }
    });
  }
}
