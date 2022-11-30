import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-settings-bar',
  templateUrl: './settings-bar.component.html',
  styleUrls: ['./settings-bar.component.css']
})
export class SettingsBarComponent {
  myDate:Date = new Date();

  constructor(private _appService: AppService) {
    this._appService.getCurrentDate();
    this.myDate=this._appService.myDate;
   }

}
