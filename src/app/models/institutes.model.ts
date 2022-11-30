import { addressInfo } from "./addressInfo.model";
import { ageGroup } from "./ageGroup.model";
import { communicationInfo } from "./communicationInfo.model";
import { institutionType } from "./institutionType.model";

export class institutes {
    name!: string;
    isNotWithCharge!:boolean;
    isPayingInstitution!: boolean;
    addressInfo!: addressInfo;
    communicationInfo!:communicationInfo;
    educationType!:Number;
    ageGroup!:ageGroup;
    companyNumber!:Number;
    institutionCode!:Number;
    institutionSymbol!:string;
    institutionCompanyNumberOrSymbol!:Number;
    sushaimeCode!:string;
    almogCode!:string;
    institutionType!:institutionType;
    isWithPayingInstitution!:boolean;
    city!:Number;
    address!:Number;
    isBlockedForReservation!:boolean;
    id!:string;
    isDeleted!:boolean;
    isDirty!:boolean;
    isCanceled!:boolean;
    isActive!:boolean;
    createdOn!:Number; 
}