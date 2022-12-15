import { address } from "./address.model";
import { company } from "./company.model";

export class user {
    id!: Number;
    name!:string;
    username!:string;
    email!:string;
    address!:address;
    phone!:string;
    website!:string;
    company!:company;
}