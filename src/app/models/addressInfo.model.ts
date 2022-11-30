import { country } from "./country.model";

export class addressInfo {
    city!: string;
    address!:string;
    zipCode!: string;
    mailingAddress!: string;
    country!:country;
    state!:string;
}