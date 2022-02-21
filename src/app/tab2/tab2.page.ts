/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../utils/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  private listGoleadores: Array<any>;
  private listaPartidos: Array<any>;
  private segmentValue: string = '1';
  jugadoresSlides = {
    slidesPerView: 4,
  };
  constructor(private apiService: ApiService) {}
  ngOnInit(){
    this.apiService.get('jugadoresfull').then(res => {
      this.listGoleadores = res.data.jugadores;
    });
    this.apiService.get('partidosfull').then(res => {
      this.listaPartidos = res.data.partidos;
    });
  }
  ionViewWillEnter() {
    this.apiService.get('jugadoresfull').then(res => {
      this.listGoleadores = res.data.jugadores;
    });
    this.apiService.get('partidosfull').then(res => {
      this.listaPartidos = res.data.partidos;
    });
  }
  doRefresh(event) {
    setTimeout(() => {
      this.apiService.get('jugadoresfull').then(res => {
        this.listGoleadores = res.data.jugadores;
      });
      this.apiService.get('partidosfull').then(res => {
        this.listaPartidos = res.data.partidos;
      });
      event.target.complete();
    }, 2000);
  }
  segmentChange(event: CustomEvent){
    this.segmentValue = event.detail.value;
  }
}
