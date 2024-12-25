import { Component, OnInit } from '@angular/core'
import { UploadService } from '../../api'

@Component({
    selector: 'demo-upload',
    standalone: true,
    imports: [],
    templateUrl: './upload.component.html',
    styleUrl: './upload.component.scss',
})
export class UploadComponent implements OnInit {

    fileUpload: File | undefined
    documentUpload: File | undefined
    imageUpload: File | undefined

    constructor(
      private readonly uploadService: UploadService
    ) {}

    ngOnInit(): void {}

    onFilePicked(event: any) {
        console.log('onFilePicked()')
        console.log(event)
        console.log(event.target.files[0])

        const file: File = event.target.files[0]
        this.fileUpload = file
    }

    onFileSubmit() {
        console.log('onFileSubmit()')
        console.log("fileUpload", this.fileUpload)

        this.uploadService.uploadFile(this.fileUpload).subscribe(
          {
            next: (response: any) => {
              console.log(response)
            }
          }
        )
    }
    
}
