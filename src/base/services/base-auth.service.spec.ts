import { TestBed } from '@angular/core/testing'

import { BaseAuthService } from './base-auth.service'

describe('BaseAuthService', () => {
    let service: BaseAuthService

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(BaseAuthService)
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })
})
