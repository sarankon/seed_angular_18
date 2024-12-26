import { inject } from '@angular/core'
import { HttpInterceptorFn } from '@angular/common/http'
import { TokenService } from '../auth/token.service';

export const authInterceptor:HttpInterceptorFn = (request, next) => {
    console.log("authInterceptor")
    // console.log('req: ', req)
    // console.log('next: ', next)

    const tokenService = inject(TokenService)
    const accessToken: string | null = tokenService.getAccessToken()
    // const refreshToken: string | null = tokenService.getRefrechToken()

    if(accessToken) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    }
    
    return next(request)
}