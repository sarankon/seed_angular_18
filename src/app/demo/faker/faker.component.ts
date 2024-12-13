import { Component, OnInit } from '@angular/core';
import { faker, fakerTH } from '@faker-js/faker';

@Component({
  selector: 'demo-faker',
  standalone: true,
  imports: [],
  templateUrl: './faker.component.html',
  styleUrl: './faker.component.scss'
})
export class FakerComponent implements OnInit {

  dataList:Array<any> = []

  ngOnInit(): void {
    this.fakeData()
    console.log(this.dataList);
  }

  fakeData() {
    this.dataList = new Array(10).fill(null).map(() => {
      return {
        id: faker.string.uuid(),
        username: faker.internet.email().toLowerCase(),
        fullName: fakerTH.person.fullName(),
        status: fakerTH.datatype.boolean(),
        phone: fakerTH.phone.number()
      }
    })
  }

}

// class Data {
//   id!:string;
//   username!:string;
//   fullName!:string;
//   status!:boolean;
//   phone?:number;
// }
