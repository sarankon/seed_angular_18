import { Component, OnInit } from '@angular/core'
import { BaseAuthService } from '../../services/base-auth.service'

@Component({
    selector: 'base-logout',
    standalone: true,
    imports: [],
    templateUrl: './logout.component.html',
    styleUrl: './logout.component.scss',
})
export class LogoutComponent implements OnInit {
    constructor(
        private readonly baseAuthService: BaseAuthService
    ) {}

    ngOnInit(): void {
        this.baseAuthService.logout()
    }
}
