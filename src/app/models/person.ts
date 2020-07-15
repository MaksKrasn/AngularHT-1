import {Job} from '../models/Job'

export class Person{
    id: number;
    firstName: string = '';
    lastName: string = '';
    middleName: string = '';
    birthData: string = '';
    photo: string = '';
    positions: Job[];
    
}