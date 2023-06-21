
export interface ReservationState {
    id: string,
    name : string,
    tel: string,
    shop: string,
    petName: string,
    petWeight : string,
    date: string,
    time: string,
    requestMemo: string,
    sissorCut: boolean,
    catCut: boolean,
    pickUpService: boolean,
    createdAt : string;
    updatedAt : string;
    confirm: boolean;
  }
  
  
export type ReservationInput = Pick<ReservationState,"name" | "tel" |"shop" | "petName" | "petWeight" | "date" | "time" | "requestMemo" | "sissorCut" | "pickUpService" | "catCut" | "confirm">;
  