import { Component } from '@angular/core';
import { Observable, Observer, interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  constructor() {}

  //I18nSelectPipe
  public person = {
    name: 'Pepito',
    age: 31,
    language: 'es',
  };

  changePerson(): void {
    this.person.name = 'Ana';
    this.person.language = 'fr';
  }

  public grettingMap = {
    es: 'Hola!!',
    fr: 'Bonjour!!',
    other: 'Hello!!',
  };

  //I18nSelectPipe

  public messages: number = 3;
  public messageMap = {
    '=0': 'No messages',
    '=1': 'One message',
    other: '# messages',
  };

  deleteMessage(): void {
    this.messages -= 1;
  }
  resetMessage(): void {
    this.messages = 3;
  }

  //SlicePipe
  public names: string[] = ['Adrian', 'Jorge', 'Julia', 'Yerson', 'Javier'];

  //JSONpipe
  public object: Object = {
    menu: {
      id: 'file',
      value: 'File',
      popup: {
        menuitem: [
          { value: 'New', onclick: 'CreateNewDoc ()' },
          { value: 'Open', onclick: 'OpenDoc ()' },
          { value: 'Close', onclick: 'CloseDoc ()' },
        ],
      },
    },
  };

  //KeyValuePipe
  public personObject: Object = {
    name:'Javier',
    age:54,
    address:'California'
  }

  //AsyncPipe
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
}
