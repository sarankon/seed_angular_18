import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, CanMatch, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router'
import { BaseAuthService } from '../services/base-auth.service'
import { map } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class ServerGuard implements CanActivate, CanMatch {
    constructor(
        private readonly router: Router,
        private readonly baseAuthService: BaseAuthService,
    ) {
        console.log('ServerGuard: constructor')
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        console.log('ServerGuard: canActivate')
        console.log(route.data)
        return true
    }

    canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
        console.log('ServerGuard: canMatch')
        console.log(route.data)
        return this.baseAuthService.isAuthenticated().pipe(
            map((data) => {
                console.log(data)
                return true
            }),
        )
    }
}
