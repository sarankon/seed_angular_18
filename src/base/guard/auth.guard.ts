import { inject } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router'
import { TokenService } from '../auth/token.service'
import { AuthService } from '../../api'

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    console.log('authGuard')
    // console.log('route', route)
    // console.log('state', state)

    const router: Router = inject(Router)
    const tokenService: TokenService = inject(TokenService)
    const authService: AuthService = inject(AuthService)

    // Basic Check Token
    if (tokenService.getAccessToken()) {
        return true
    } else {
        router.navigate(['base'])
        return false
    }

    // authService.isAuthenticated().subscribe({
    //   next: (response: any) => {
    //     console.log('isAuthenticated: ', true)
    //     if(response['statusCode'] == 200) {
    //       return true
    //     }
    //     return false
    //   },
    //   error: () => {
    //     console.log('isAuthenticated: ', false)
    //     router.navigate(['base'])
    //     return false
    //   }
    // })
}
