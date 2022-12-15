import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  users:user[]=[];

  constructor(private router: Router) {
  }
  
  ngOnInit(): void {
    debugger
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {this.users=json})
  }

  getMyTodos(id:Number){
    debugger
    this.router.navigate(['/userTodos',{userId:id}]);
  }
  readUserDetails(id:Number){
    this.router.navigate(['/userDetails',{userId:id}]);
  }
}
