import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

import { BaseAuthService } from '../../services/base-auth.service'

@Component({
    selector: 'base-register',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
    inputMaxLength: number = 32
    formRegister: FormGroup = new FormGroup({
        username: new FormControl(''),
        password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]),
    })

    constructor(
        private readonly router: Router,
        private readonly baseAuthService: BaseAuthService,
    ) {

    }

    ngOnInit(): void {
        throw new Error('Method not implemented.')
    }

    onClickAlreadyAccount() {
        this.router.navigate(['/base/login'])
    }

}
