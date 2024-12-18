import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { CrudService } from '../api/api/crud.service'
import { CreateCrudDto } from '../api/model/create-crud-dto'

@Component({
    selector: 'demo-crud',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './crud.component.html',
    styleUrl: './crud.component.scss',
})
export class CrudComponent implements OnInit {
    // topic: new FormControl('', Validators.required),
    // detail: new FormControl('')

    crudList: any = []

    crudForm = new FormGroup({
        topic: new FormControl('', Validators.required),
        detail: new FormControl(''),
    })

    constructor(private readonly crudService: CrudService) {}

    ngOnInit(): void {
        this.loadCrud()
    }

    loadCrud() {
        console.log('loadCrud')
        this.crudService.findAllCrud().subscribe({
            next: (respose) => {
                console.log('Response:')
                console.log(respose)

                if (respose.statusCode === 200) {
                    this.crudList = respose.data
                }
            },
        })
    }

    onSubmit() {
        console.log('onSubmit()')
        console.log(this.crudForm.value)

        const crudDto: CreateCrudDto = {
            topic: this.crudForm.controls.topic.value ?? '',
            detail: this.crudForm.controls.detail.value ?? '',
        }

        this.crudService.createCrud(crudDto).subscribe({
            next: (response) => {
                console.log('Response:')
                console.log(response)

                if (response.statusCode === 200) {
                    this.loadCrud()
                }
            },
        })
    }
}
