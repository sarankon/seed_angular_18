import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { provideRouter } from '@angular/router'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { routes } from './app.routes'

import { providePrimeNG } from 'primeng/config'
import Aura from '@primeng/themes/aura'

import { AuthInterceptor } from '../base/interceptor/auth.interceptor'

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideAnimationsAsync(),
        providePrimeNG({
            ripple: true,
            theme: {
                preset: Aura,
            },
        }),
        // provideHttpClient()
        provideHttpClient(
          withInterceptors([AuthInterceptor])
        ),
    ],
}
