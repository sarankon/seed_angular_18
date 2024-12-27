import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../../../api'
import { BaseAuthService } from '../../services/base-auth.service'

@Component({
    selector: 'base-profile',
    standalone: true,
    imports: [],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
    constructor(
        private readonly router: Router,
        private readonly baseAuthService: BaseAuthService
        // private readonly authService: AuthService,
    ) {}

    ngOnInit(): void {
        console.log('Username  : ', this.baseAuthService.getUsername())
        console.log('Full Name : ', this.baseAuthService.getFullName())
        // this.authService.infoUser().subscribe({
        //     next: (response: any) => {
        //         console.log('response: ', response)
        //     }
        // })
    }
}
