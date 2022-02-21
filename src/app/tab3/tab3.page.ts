import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../utils/api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  private lista: Array<any>;
  private searchEquipos: any;
  constructor(
    private apiService: ApiService
  ) {}
  ngOnInit(){
    this.apiService.get('equipos').then(res => {
      this.lista = res.data.equipos;
      this.searchEquipos = this.lista;
    });
  }
  ionViewWillEnter() {
    this.apiService.get('equipos').then(res => {
      this.lista = res.data.equipos;
      this.searchEquipos = this.lista;
    });
  }
  doRefresh(event) {
    setTimeout(() => {
      this.apiService.get('equipos').then(res => {
        this.lista = res.data.equipos;
        this.searchEquipos = this.lista;
      });
      event.target.complete();
    }, 2000);
  }
  search(event) {
    const text = event.target.value;
    this.searchEquipos = this.lista;
    if (text && text.trim() !== '') {
      this.searchEquipos = this.searchEquipos.filter(e => e.nombre.toLowerCase().indexOf(text.toLowerCase()) > -1);
    }
  }
}