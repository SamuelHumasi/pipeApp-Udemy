import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
  styleUrls: ['./numbers-page.component.css']
})
export class NumbersPageComponent implements OnInit {

  public totalSells:number = 58968565.565
  public percent:number = 0.4568
  public examples=[
      {
        "format": "1000",
        "value": "f230fh0g3",
        'pipe':''
      },
     
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
