import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { CrudService } from '../api/api/crud.service'
import { CreateCrudDto } from '../api/model/create-crud-dto'
import { UpdateCrudDto } from '../api/model/update-crud-dto'

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

    crudList: Array<UpdateCrudDto> = []

    crudForm = new FormGroup({
        topic: new FormControl('', Validators.required),
        detail: new FormControl(''),
    })

    selecteCrudId: number = 0

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
                    this.crudList = respose.data as Array<UpdateCrudDto>
                }
            },
        })
    }

    resetForm() {
        this.crudForm.reset()
        this.selecteCrudId = 0
    }

    onSubmit() {
        console.log('onSubmit()')
        console.log(this.crudForm.value)

        if (this.selecteCrudId == 0) {
            this.create()
        } else {
            this.update()
        }
    }

    create() {
        console.log('create()')
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
                    this.resetForm()
                }
            },
        })
    }

    update() {
        console.log('update()')
        const crudDto: UpdateCrudDto = {
            id: this.selecteCrudId,
            topic: this.crudForm.controls.topic.value ?? '',
            detail: this.crudForm.controls.detail.value ?? '',
        }

        this.crudService.updateCrud(this.selecteCrudId.toString(), crudDto).subscribe({
            next: (response) => {
                console.log('Response:')
                console.log(response)

                if (response.statusCode === 200) {
                    this.loadCrud()
                    this.resetForm()
                }
            },
        })
    }

    onSelect(id: number) {
        console.log(`onSelect(${id})`)

        this.selecteCrudId = id
        const data = this.crudList.find((crud) => crud.id == id)

        this.crudForm.setValue({
            topic: data?.topic ?? '',
            detail: data?.detail ?? '',
        })
    }

    onDelete(id: number) {
        console.log(`onDelete(${id})`)

        this.crudService.removeCrud(id.toString()).subscribe({
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
