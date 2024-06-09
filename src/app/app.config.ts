import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import {BrowserAnimationsModule,NoopAnimationsModule} from "@angular/platform-browser/animations";

import {  provideToastr } from 'ngx-toastr';
import { addTokenInterceptor } from './utils/add-token.interceptor';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true })
    , provideRouter(routes)
    , provideClientHydration()
    , provideHttpClient(),
    //,provideHttpClient(withInterceptors{[addTokenInterceptor]})
    provideHttpClient(
      withInterceptors([addTokenInterceptor]),
    )
   // ,{provide: HTTP_INTERCEPTORS,useClass:addTokenInterceptor, multi:true}

    ,provideToastr (
      {
        timeOut: 4000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
      }
    ), // Toastr providers
  ]

};
