import { inject } from '@angular/core'
import { HttpEvent, HttpEventType, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http'
import { TokenService } from '../auth/token.service';
import { Observable, tap } from 'rxjs';

export const AuthInterceptor:HttpInterceptorFn = (req, next) => {
    console.log('req: ', req)
    console.log('next: ', next)

    const tokenService = inject(TokenService)
    const accessToken: string | null = tokenService.getAccessToken()
    // const refreshToken: string | null = tokenService.getRefrechToken()

    if(accessToken) {
        req = req.clone({ headers: req.headers.set('Authorization',`Bearer ${accessToken}`)})
    }
    return next(req).pipe(tap(error => {
        console.log(error)
    }))
    
}