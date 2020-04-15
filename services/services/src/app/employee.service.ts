import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id": 1, "name": "Ignas", "age": 30},
      {"id": 2, "name": "Jonas", "age": 22},
      {"id": 3, "name": "Pranas", "age": 13},
      {"id": 4, "name": "Minde", "age": 22},
    ]
  }
}
