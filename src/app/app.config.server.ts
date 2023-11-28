import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import {provideRouter} from "@angular/router";
import {routes} from "./app.routes";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {AuthService} from "./services/auth/auth.service";
import {provideHotToastConfig} from "@ngneat/hot-toast";
import {icons, LucideIconProvider} from 'lucide-angular';
import {LUCIDE_ICONS} from "lucide-angular";

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideAnimationsAsync(),
    provideRouter(routes),
    AuthService,
    provideHotToastConfig({
      position: 'top-right',
      duration: 3000,
    }),
    {provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) },
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
