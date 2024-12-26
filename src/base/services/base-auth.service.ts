import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService, UserLoginDto } from '../../api'

@Injectable({
    providedIn: 'root',
})
export class BaseAuthService {
    constructor(
        private readonly router: Router,
        private readonly authService: AuthService,
    ) {
        console.log('BaseAuthService')
    }

    login(userLoginDto: UserLoginDto, redirectPath: string = 'base/profile') {
        this.authService.login(userLoginDto).subscribe({
            next: (response: any) => {
                console.log('response: ', response)
                if (response['statusCode'] == 200 && response['data']) {
                    this.setAccessToken(response['data']['access_token'])
                    this.setRefreshToken(response['data']['refresh_token'])
                    this.router.navigate([redirectPath])
                }
            },
        })
    }

    logout(redirectPath: string = 'base/login') {
        this.clearToken()
        this.router.navigate([redirectPath])
    }

    isAuthenticated() {
        return this.authService.isAuthenticated()
    }

    clearToken() {
        localStorage.clear()
    }

    setAccessToken(token: string) {
        localStorage.setItem('access_token', token)
    }

    getAccessToken() {
        return localStorage.getItem('access_token')
    }

    setRefreshToken(token: string) {
        localStorage.setItem('refresh_token', token)
    }

    getRefrechToken() {
        return localStorage.getItem('refresh_token')
    }
}
