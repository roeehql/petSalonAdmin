export interface SalonList {
    id:string;
    name:string;
    tel: string;
    address:string
    canSissorCut: boolean;
    canCatCut: boolean;
    hasCctv:boolean;
    hasPickupService:boolean;
}
export interface SalonAuth{
    name:string;
    tel: string;
    password:string;
    address:string
    canSissorCut: boolean;
    canCatCut: boolean;
    hasCctv:boolean;
    hasPickupService:boolean;
}

export type SalonInput = Pick<SalonAuth, "tel" | "password" >