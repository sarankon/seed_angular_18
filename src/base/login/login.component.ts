import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

import { AuthService } from '../../api/api/auth.service'
import { UserLoginDto } from '../../api'
import { TokenService } from '../auth/token.service'

@Component({
    selector: 'base-login',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
    inputMaxLength: number = 32
    formLogin: FormGroup = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]),
        password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]),
    })

    constructor(
        private readonly router: Router,
        private readonly authService: AuthService,
        private readonly tokenService: TokenService,
    ) {}

    ngOnInit(): void {}

    onSubmitForm() {
        console.log('onSubmitForm()')
        const userLoginDto: UserLoginDto = {
            username: this.formLogin.controls['username'].value,
            password: this.formLogin.controls['password'].value,
        }
        console.log('userLoginDto: ', userLoginDto)
        this.authService.login(userLoginDto).subscribe({
            next: (response: any) => {
                console.log('response: ', response)
                if (response['statusCode'] == 200 && response['data']) {
                    this.tokenService.setAccessToken(response['data']['access_token'])
                    this.tokenService.setRefreshToken(response['data']['refresh_token'])
                    this.router.navigate(['base/profile'])
                }
            },
        })
    }
}
