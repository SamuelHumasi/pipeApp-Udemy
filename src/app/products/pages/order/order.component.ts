import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent implements OnInit {
  
  public orderBy?: keyof Hero
  public exceptions:string[] = ['el', 'de']

  public heroes: Hero[] = [
    { name: 'Superman', canFly: true, color: Color.azul },
    { name: 'Batman', canFly: false, color: Color.negro },
    { name: 'Linterna Verde', canFly: true, color: Color.verde },
    { name: 'Robin', canFly: false, color: Color.rojo },
    { name: 'Daredevil', canFly: false, color: Color.negro },
  ];

  constructor() { }

  ngOnInit(): void { }

  public changeSortBy (value: keyof Hero) {
    this.orderBy = value
  }

  public changeExceptions (value:string[]){
    this.exceptions = value
    console.log(this.exceptions)
  }
}
