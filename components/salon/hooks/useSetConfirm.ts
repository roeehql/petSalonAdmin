import { salonApi } from "@/pages/api/getSalonListApi"
import { useAppDispatch } from "@/store/hooks"
import { setToast } from "@/store/toastSlice"
import { ReservationInput } from "@/types/ReservationTypes"

export const useSetConfirm =(id:string)=>{
    const dispatch = useAppDispatch()

    const setConfirm =async(confirmData:ReservationInput)=>{
        const result = await salonApi.setConfirm({id, confirmData});
         if(result !== 200){
            dispatch(setToast({type:"error", text:"죄송합니다. 다시 시도해주세요."}))
         }else{
            dispatch(setToast({type:"success", text:"예약이 승인되었습니다."}))
         }
    }

    return {setConfirm}
}