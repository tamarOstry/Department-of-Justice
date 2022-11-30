import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { institutes } from "../models/institutes.model";


@Injectable()
export class SchoolService {
  
GetAllInstitutesFromServer():Observable<institutes[]>{
return this._http.get<institutes[]>("/api/Institutes");
}

constructor(private _http: HttpClient) {}

}