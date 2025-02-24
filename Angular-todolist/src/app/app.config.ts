import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { providePrimeNG } from "primeng/config";
import { provideAnimations } from "@angular/platform-browser/animations"
import { provideRouter } from '@angular/router';
import { provideHttpClient } from "@angular/common/http"
import Aura from "@primeng/themes/aura";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {}
      },
      ripple: false,
    }),
    provideHttpClient(),
  ]
};
