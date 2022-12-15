import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { todos } from '../models/todos.model';

@Component({
  selector: 'app-user-todos',
  templateUrl: './user-todos.component.html',
  styleUrls: ['./user-todos.component.css']
})
export class UserTodosComponent {

  userId!: Number;
  todos:todos[]=[];

  constructor(private _activeR: ActivatedRoute) {}

  ngOnInit(): void {
    debugger
    this._activeR.paramMap.subscribe(paramMap => {
      if (paramMap.get("userId")) 
        this.userId = (Number)(paramMap.get("userId"));
    });
    fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${this.userId}`)
    .then(response => response.json())
    .then(json => this.todos=json)
  }
}
