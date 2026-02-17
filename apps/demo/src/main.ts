import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import '../../../packages/headless/src/index';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
