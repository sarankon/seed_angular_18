import { TestBed } from '@angular/core/testing'

import { BaseApiInterceptor } from './base-api.interceptor'

describe('BaseInterceptorApiInterceptor', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [BaseApiInterceptor],
        }),
    )

    it('should be created', () => {
        const interceptor: BaseApiInterceptor = TestBed.inject(BaseApiInterceptor)
        expect(interceptor).toBeTruthy()
    })
})
