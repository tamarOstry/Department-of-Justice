import { geo } from "./geo.model";

export class address {
    street!: string;
    suite!:string;
    city!:string;
    zipcode!:string;
    geo!:geo;
}