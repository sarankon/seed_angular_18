import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { jwtDecode, JwtPayload } from 'jwt-decode'
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
                    // Set Access Token and Refresh Token
                    const accessToken = response['data']['access_token']
                    const refreshToken = response['data']['refresh_token']
                    this.setAccessToken(accessToken)
                    this.setRefreshToken(refreshToken)
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

    getClaim() {

        // jti (JWT ID): Unique identifier; can be used to prevent the JWT from being replayed (allows a token to be used only once)
        // iat (issued at time) : Time at which the JWT was issued; can be used to determine age of the JWT
        // exp (expiration time): Time after which the JWT expires
        // nbf (not before time): Time before which the JWT must not be accepted for processing

        const accessToken = this.getAccessToken()
        if(accessToken) {
            const jwtPayload: JwtPayload = jwtDecode(accessToken)
            return jwtPayload as any
        } else {
            return null
        }

        // const jwtPayload: JwtPayload = jwtDecode(this.getAccessToken()??'')
        // console.log('jwtPayload', jwtPayload)

        // const iat = jwtPayload.iat ?? 0
        // const exp = jwtPayload.exp ?? 0

        // console.log('iat', iat * 1000, new Date(iat * 1000).toLocaleDateString(), new Date(iat * 1000).toLocaleTimeString())
        // console.log('exp', exp * 1000, new Date(exp * 1000).toLocaleDateString(), new Date(exp * 1000).toLocaleTimeString())
    }

    getUsername() {
        const claim = this.getClaim()
        return claim['username']
    }

    getFullName() {
        const claim = this.getClaim()
        return claim['firstName'] + ' ' + claim['lastName']
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
