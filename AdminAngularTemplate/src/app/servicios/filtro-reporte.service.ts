import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FiltroReporteService {
  urlLocal: string;
  urlAWS: string;
  url:string;
  constructor(private http: HttpClient) {
    this.urlLocal = "http://127.0.0.1:8000/api/"
    this.urlAWS = "http://161.22.42.218/api/"
    this.url = this.urlAWS
  }

  filterCedula(cedula:any){
    let url = this.url + 'consultarAdherentePermanente?cedula=' + cedula;
    return this.http.get(url);
  }

  getNombreSRI(cedula:any){
    let url = 'https://srienlinea.sri.gob.ec/movil-servicios/api/v1.0/deudas/porIdentificacion/' + cedula;
    return this.http.get(url);
  }

  filter(){
    
  }
}
