import { Component, OnInit } from '@angular/core';


export interface DataTest {
  format:              string;
  value:            string;
  pipe: string
}

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css'],
})
export class BasicPageComponent implements OnInit {
  public lowercase: string = 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR';
  public uppercase: string = 'lorem ipsum dolor sit amet, consectetur';
  public title: string = 'loReM ipMuM DolOr sit aMet, consectetur';
  public dates: DataTest[]=[]
  public customDate:Date = new Date()

  constructor() {}

  ngOnInit(): void {
    this.dates = [
      {
        "format": "1000",
        "value": "f230fh0g3",
        'pipe':''
      },
     
    ]
  }

}

