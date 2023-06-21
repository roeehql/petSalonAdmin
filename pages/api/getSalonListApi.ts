import axios from "axios";
import { SalonInput, Salons } from "@/types/salonsTypes";
import { ReservationInput } from "@/types/ReservationTypes";
import { TOKEN, handleStorage } from "@/util/handleStorage";

export const axiosApi = axios.create({
    baseURL: "http://localhost:8080",
    });

export const salonApi = {
    createSalon : async (salonData:Salons)=> {
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
        console.log(data)
        return {data, status}
    },
    getBooking : async (shop:string) => {
        const { data , status } = await axiosApi.post(`/reservations/byShop`,{
            shop
        },{
            headers: {
            Authorization: handleStorage.getStorage(TOKEN)
            }
        })
        console.log(data)
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