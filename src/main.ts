import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { EventbindingComponent } from './app/eventbinding/eventbinding.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  bootstrapApplication(EventbindingComponent, appConfig)
  .catch((err) => console.error(err));
