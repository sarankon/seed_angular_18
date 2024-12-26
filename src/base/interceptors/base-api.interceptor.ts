import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs'
import { BaseAuthService } from '../services/base-auth.service'

@Injectable()
export class BaseApiInterceptor implements HttpInterceptor {
    constructor(
        private readonly router: Router,
        private readonly baseAuthService: BaseAuthService,
    ) {
        console.log('BaseApiInterceptor')
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        console.log('intercept')
        // console.log('req: ', req)
        // console.log('next: ', next)

        // const tokenService = inject(TokenService)
        const accessToken: string | null = this.baseAuthService.getAccessToken()
        const refreshToken: string | null = this.baseAuthService.getRefrechToken()

        if(accessToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
        }

        return next.handle(request)
                .pipe(
                    catchError((err) => {
                        console.log("catchError: ", err)
                        if(err['status'] == 401) {
                            this.router.navigate(['base'])
                        }
                        return throwError(() => err)
                    })
                )   
    }
}
