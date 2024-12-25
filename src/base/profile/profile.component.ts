import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../../api'

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
        private readonly authService: AuthService,
    ) {}

    ngOnInit(): void {
        this.authService.infoUser().subscribe({
            next: (response: any) => {
                console.log('response: ', response)
            }
        })
    }
}
