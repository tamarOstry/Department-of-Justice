import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-where-you',
  templateUrl: './where-you.component.html',
  styleUrls: ['./where-you.component.css']
})
export class WhereYouComponent {

  @Input()
  whereYou!:string;
}
