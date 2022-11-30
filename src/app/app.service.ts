import { Injectable } from "@angular/core";

@Injectable()
export class AppService {

    myDate = new Date();

    getCurrentDate():void{
        setInterval(() => {
            this.myDate=new Date();
        }, 5000);
        // 86400000
    }
}