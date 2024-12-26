import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { provideRouter } from '@angular/router'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { routes } from './app.routes'

import { providePrimeNG } from 'primeng/config'
import Aura from '@primeng/themes/aura'

import { BaseApiInterceptor } from '../base/interceptors/base-api.interceptor'

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
        // provideHttpClient(withInterceptors([functionInterceptor]),
        provideHttpClient(
            withInterceptorsFromDi()
        ),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: BaseApiInterceptor,
            multi: true,
        },
    ],
}
