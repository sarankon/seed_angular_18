import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

import { UserLoginDto } from '../../../api'
import { BaseAuthService } from '../../services/base-auth.service'

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
        private readonly baseAuthService: BaseAuthService
    ) {}

    ngOnInit(): void {}

    onSubmitForm() {
        console.log('onSubmitForm()')
        const userLoginDto: UserLoginDto = {
            username: this.formLogin.controls['username'].value,
            password: this.formLogin.controls['password'].value,
        }
        console.log('userLoginDto: ', userLoginDto)
        this.baseAuthService.login(userLoginDto)
    }
}
