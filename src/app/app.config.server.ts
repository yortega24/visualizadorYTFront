import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideAnimations } from '@angular/platform-browser/animations';
import {BrowserAnimationsModule,NoopAnimationsModule} from "@angular/platform-browser/animations";

import { provideToastr } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';


const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
    
   
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
