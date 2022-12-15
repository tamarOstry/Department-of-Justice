import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { user } from '../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{

  user!:user;
  userId!:Number;

  ngOnInit(): void {
    this._activeR.paramMap.subscribe(paramMap => {
      if (paramMap.get("userId")) 
        this.userId = (Number)(paramMap.get("userId"));
    });
    debugger
    fetch(`https://jsonplaceholder.typicode.com/users/${this.userId}`)
    .then(response => response.json())
    .then(json => {this.user=json})
  }
  constructor(private _activeR: ActivatedRoute) {}
}
