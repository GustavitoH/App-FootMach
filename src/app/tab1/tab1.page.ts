import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../utils/api.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  private lista: Array<any>;
  private searchJugadores: any;
  constructor(
    private apiService: ApiService,
    private toastController: ToastController,
    private router: Router
  ) {}
  ngOnInit(){
    this.apiService.get('jugadoresfull').then(res => {
      this.lista = res.data.jugadores;
      this.searchJugadores = this.lista;
    });
  }
  ionViewWillEnter() {
    this.apiService.get('jugadoresfull').then(res => {
      this.lista = res.data.jugadores;
      this.searchJugadores = this.lista;
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
  doRefresh(event) {
    setTimeout(() => {
      this.apiService.get('jugadoresfull').then(res => {
        this.lista = res.data.jugadores;
        this.searchJugadores = this.lista;
      });
      event.target.complete();
    }, 2000);
  }
  search(event) {
    const text = event.target.value;
    this.searchJugadores = this.lista;
    if (text && text.trim() !== '') {
      this.searchJugadores = this.searchJugadores.filter(e => e.nombre.toLowerCase().indexOf(text.toLowerCase()) > -1);
    }
  }
  editar(id){
    this.router.navigate(['/tabs/tab1/formularioeditar', id]);
  }
  eliminar(id){
    this.apiService.delete('jugadores', id).then(e => {
      if (e.data.estado) {
        this.presentToast(e.data.message, 'success');
        this.ionViewWillEnter();
      } else {
        this.presentToast(e.data.message, 'danger');
      }
    });
  }
}
