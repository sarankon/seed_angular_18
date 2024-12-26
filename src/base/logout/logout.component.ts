import { Component, OnInit } from '@angular/core'
import { TokenService } from '../auth/token.service'
import { Router } from '@angular/router'

@Component({
    selector: 'base-logout',
    standalone: true,
    imports: [],
    templateUrl: './logout.component.html',
    styleUrl: './logout.component.scss',
})
export class LogoutComponent implements OnInit {
    constructor(
        private readonly router: Router,
        private readonly tokenService: TokenService,
    ) {}

    ngOnInit(): void {
        this.tokenService.clearToken()
        this.router.navigate(['base'])
    }
}
