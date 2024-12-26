import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, CanMatch, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router'
import { BaseAuthService } from '../services/base-auth.service'

@Injectable({
    providedIn: 'root',
})
export class BaseGuard implements CanActivate, CanMatch {

    constructor(
        private readonly router: Router,
        private readonly baseAuthService: BaseAuthService
    ) {
        console.log('BaseGuard: constructor')
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        console.log('BaseGuard: canActivate')
        // const router: Router = inject(Router)
        // const baseAuthService: BaseAuthService = inject(BaseAuthService)

        // Basic Check Token
        if (this.baseAuthService.getAccessToken()) {
            return true
        } else {
            this.router.navigate(['base'])
            return false
        }
    }

    canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
        console.log('BaseGuard: canMatch')

        // Basic Check Token
        if (this.baseAuthService.getAccessToken()) {
            return true
        } else {
            this.router.navigate(['base'])
            return false
        }
    }
}
