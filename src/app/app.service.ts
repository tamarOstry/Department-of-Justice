import { Injectable } from "@angular/core";

@Injectable()
export class AppService {

    myDateEbrue = new Date();
    a!:string;
    getCurrentDate():void{
        setInterval(() => {
            fetch('https://www.hebcal.com/etc/hdate-he.js', { mode: 'no-cors'})
             .then(data=>{
                if(data)
                  console.log(data);
                //   this.myDateEbrue=data.toString();       
            })
        }, 86400000);
    }
}