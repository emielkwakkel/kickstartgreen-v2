import { bootstrapApplication, enableDebugTools } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from '@shared/util';
import { ApplicationRef, enableProdMode } from '@angular/core';

environment.production && enableProdMode();

bootstrapApplication(AppComponent, appConfig)
  .then((ref) => {
    !environment.production && enableDebugTools(ref.injector.get(ApplicationRef).components[0])
  })
  .catch((err) =>
    console.error(err)
  );
