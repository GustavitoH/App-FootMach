import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'http://localhost:3800/api/';
  constructor(private router: Router) { }

  getId(path, id) {
    return axios.get(this.apiUrl + path + '/' + id);
  }
  get(path) {
    return axios.get(this.apiUrl + path);
  }
  post(path, data){
    return axios.post(this.apiUrl + path, data);
  }
  put(path, id, data){
    return axios.put(this.apiUrl + path + '/' + id, data);
  }
  delete(path, id){
    return axios.delete(this.apiUrl + path + '/' + id);
  }
}
