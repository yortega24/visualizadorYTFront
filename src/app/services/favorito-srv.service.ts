import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Favorito } from '../interfaces/favorito';

@Injectable({
  providedIn: 'root'
})
export class FavoritoSrvService {
  //#http=inject(HttpClient);

  private myAppUrl : string;
  private myApiUrl : string;
  
  constructor( private http: HttpClient ) { 
    this.myAppUrl = environment.development;
    this.myApiUrl= 'api/favoritos/'
  }

  getFavoritos( ): Observable <Favorito[]>{
    /*const token= localStorage .getItem('token');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${token}`)
    return this.http.get<Favorito[]>(`${this.myAppUrl}${this.myApiUrl}favoritos`,{headers:headers})
    */
    return this.http.get<Favorito[]>(`${this.myAppUrl}${this.myApiUrl}favoritos`)
  }
}
