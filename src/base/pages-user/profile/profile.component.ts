import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

import { BaseAuthService } from '../../services/base-auth.service'

@Component({
    selector: 'base-profile',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
    inputMaxLength: number = 32
    formProfile: FormGroup = new FormGroup({
        username: new FormControl(''),
        password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]),
        firstName: new FormControl(''),
        lastName: new FormControl
    })

    constructor(
        private readonly router: Router,
        private readonly baseAuthService: BaseAuthService,
    ) {}

    ngOnInit(): void {
        console.log('Username  : ', this.baseAuthService.getUsername())
        console.log('Full Name : ', this.baseAuthService.getFullName())

        this.formProfile.controls['username'].setValue(this.baseAuthService.getUsername())
        this.formProfile.controls['username'].disable()

        // this.authService.infoUser().subscribe({
        //     next: (response: any) => {
        //         console.log('response: ', response)
        //     }
        // })
    }
}
