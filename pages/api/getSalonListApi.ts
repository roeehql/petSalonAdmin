import axios from "axios";
import { SalonInput, SalonAuth } from "@/types/salonsTypes";
import { ReservationInput } from "@/types/ReservationTypes";
import { TOKEN, handleStorage } from "@/util/handleStorage";

export const axiosApi = axios.create({
    baseURL: "http://localhost:8080",
    });

export const salonApi = {
    createSalon : async (salonData:SalonAuth)=> {
        const { data, status } = await axiosApi.post('/salons/create',{
            salonData
        })
        return {data, status }
    },
    loginSalon: async ({ tel, password }:SalonInput)=> {
        const { data , status } = await axiosApi.post('/salons/login',{
            tel,
            password
        })
        return {data, status}
    },
    getreservation : async (shop:string) => {
        const { data , status } = await axiosApi.post(`/reservations/byShop`,{
            shop
        },{
            headers: {
            Authorization: handleStorage.getStorage(TOKEN)
            }
        })
        return { data , status }
    },
    setConfirm : async ({id , confirmData}:{id:string, confirmData:ReservationInput}) => {
        const { status } = await axiosApi.put(`/reservations/${id}`,{
            confirmData,
        },{
            headers: {
                Authorization: handleStorage.getStorage(TOKEN)            }
        })
        return status
    },
}