import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent {
  lotsOfTabs=new Array<string>("דוחות","מבואה","הנצחה","סיורים-מערכת מקוונת","ימי עיון עם נרשמים","הכשרות","כנסים","סמינרים","השתלמויות","רשימת נרשמים","הזמנות","משאבים","נותני שירות","חשבונות","מוסדות");
  name:String='מוסדות'

  constructor(private router: Router) {
   }

   goToInstitution(changeEvent: Event):void{
     debugger
     console.log(changeEvent.target)
     this.router.navigate(['/institution',{whereYou:this.name}]);
   }
}
