import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import {BrowserAnimationsModule,NoopAnimationsModule} from "@angular/platform-browser/animations";

import {  provideToastr } from 'ngx-toastr';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true })
    , provideRouter(routes)
    , provideClientHydration()
    , provideHttpClient(),
    provideToastr (
      {
        timeOut: 4000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
      }
    ), // Toastr providers
  ]

};
