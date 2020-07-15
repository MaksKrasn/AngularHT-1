import { Component } from '@angular/core';
import {Person} from '../models/Person';
import {Job} from '../models/Job';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My resume';

  person: Person = new Person;
  positions: Job[] = [new Job(1, '03.04.2001', '13.06.2007', 'Начальник ОТиЗ ОАО НТЗ', 'Разработка систем оплаты труда, нормирование численности, утверждение штатных расписаний'),
                    new Job(2, '14.06.2007', '28.01.2008', 'Начальник ТПЦ-3 ОАО НТЗ', 'Организация производственной деятельности цеха'),
                    new Job(3, '30.01.2008', 'по настоящее время', 'Директор по персоналу МФ Фаворит Плюс', 'Руководство HR предприятия')];

  
  constructor(){
    this.person.id = 1;
    this.person.firstName = 'Maksym';
    this.person.lastName = 'Krasnikov';
    this.person.middleName = 'Eduardovich';
    this.person.positions = this.positions;
    this.person.photo = '/app/images/MyFoto.jpg'
  }

}
