import { Component } from '@angular/core';

@Component({
  selector: 'app-emplist',
  imports: [],
  templateUrl: './emplist.html',
  styleUrl: './emplist.css',
})
export class Emplist {
  employees = [
  { empNo: 1001, fullname: "Ash Ketchum", gender: "Male", email: "ash@pokepackhub.com", status: "Regular", salary: 45000 },
  { empNo: 1002, fullname: "Misty Williams", gender: "Female", email: "misty@pokepackhub.com", status: "Contractual", salary: 30000 },
  { empNo: 1003, fullname: "Brock Harrison", gender: "Male", email: "brock@pokepackhub.com", status: "Probationary", salary: 28000 },
  { empNo: 1004, fullname: "Serena Yvonne", gender: "Female", email: "serena@pokepackhub.com", status: "Regular", salary: 42000 }
];

}
