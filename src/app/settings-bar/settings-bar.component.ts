import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-settings-bar',
  templateUrl: './settings-bar.component.html',
  styleUrls: ['./settings-bar.component.css']
})
export class SettingsBarComponent {
  myDate:Date = new Date();
  myDateEbrue:Date=new Date();
  constructor(private _appService: AppService) {
    this._appService.getCurrentDate();
    this.myDateEbrue=this._appService.myDateEbrue;
   }

}
