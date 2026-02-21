import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { registerGrfElements } from '@grf-ui/ui';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));

// This prevents the components from beeing three-shaken by the bundler !!!
registerGrfElements();
