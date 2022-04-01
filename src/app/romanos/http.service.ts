import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from '../model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  model : Model = new Model();

  constructor(private http: HttpClient) {}

  convert(valor: string){

    const API = 'http://localhost:8080/conversor/v1/romanos?valor='+valor;
    return this.http.get<Model>(API);
  }
  convertArabico(valor: string){

    const API = 'http://localhost:8080/conversor/v1/arabico?valor='+valor;
    return this.http.get<Model>(API);
  }
}
