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
  
  constructor(){
    this.person.id = 1;
    this.person.firstName = 'Maksym';
    this.person.lastName = 'Krasnikov';
    this.person.middleName = 'Eduardovich';
    //this.person.positions
    this.person.photo = '/app/images/MyFoto.jpg'
  }

}
