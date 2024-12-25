import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class TokenService {
    constructor() {}

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
