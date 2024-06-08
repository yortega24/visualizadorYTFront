import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSrvService {
  private myAppUrl : string;
  private myApiUrl : string;
  
  constructor( private http: HttpClient ) { 
    this.myAppUrl = environment.development;
    this.myApiUrl= 'api/usuarios/'
  }

  singIn(user: Usuario): Observable<any>{
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`,user);
  }
}
