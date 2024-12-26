import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, CanMatch, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router'
import { BaseAuthService } from '../services/base-auth.service'

@Injectable({
    providedIn: 'root',
})
export class RoleGuard implements CanActivate, CanMatch {
    constructor(
        private readonly router: Router,
        private readonly baseAuthService: BaseAuthService,
    ) {
        console.log('RoleGuard: constructor')
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        console.log('RoleGuard: canActivate')
        console.log(route.data)
        return true
    }

    canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
        console.log('RoleGuard: canMatch')
        console.log(route.data)
        return true
    }
}
