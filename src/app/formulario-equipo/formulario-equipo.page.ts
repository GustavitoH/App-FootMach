import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../utils/api.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-equipo',
  templateUrl: './formulario-equipo.page.html',
  styleUrls: ['./formulario-equipo.page.scss'],
})
export class FormularioEquipoPage implements OnInit {
  private lista: Array<any>;
  private img: string;

  constructor(
    private apiService: ApiService,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
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
  insertar(event){
    this.apiService.post('equipos',event.value).then(e => {
      if (e.data.estado) {
        this.presentToast(e.data.message, 'success');
        this.router.navigate(['/tabs/tab3']);
      } else {
        this.presentToast(e.data.message, 'danger');
      }
    });
  }
}
