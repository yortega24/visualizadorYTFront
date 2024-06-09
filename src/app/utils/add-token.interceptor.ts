import { HttpInterceptorFn,HttpRequest,HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { inject } from '@angular/core';
import { request } from 'http';
import { Observable, catchError, throwError } from 'rxjs';
import { FavoritoSrvService } from '../services/favorito-srv.service';
import { error } from 'console';
import { Router } from '@angular/router';
//import {} from 
export const addTokenInterceptor: HttpInterceptorFn = 
(
  req: HttpRequest<any>
  , next: HttpHandlerFn
) : Observable<HttpEvent<unknown>> => {

  //const authSrv = inject(FavoritoSrvService )

  //console.log(authSrv)

  const token= localStorage.getItem('token');
  //const headers=new HttpHeaders().set('Authorization',`Bearer ${token}`)
  
  
  if(token){
    console.log(' get item add-token.interceptors.ts',token)
    req=req.clone(
      {
         setHeaders:{
          Authorization:`Bearer ${token}`,  
        }
      }
    )
  }

  /*if(token){
    
    req.clone({
    headers: req.headers.set('Authorization',`Bearer ${token}`),});

  }*/
  /*return next(req).pipe(
    catchError(
      (error)=>{
        const CODES=[401,403];

        if(CODES.includes(error.status)){
          //authSrv.logOut();
          //Router.navigate(['/login']);
        }
        return throwError(()=> error);
      }
    )
  )*/
  return next(req);
};



    