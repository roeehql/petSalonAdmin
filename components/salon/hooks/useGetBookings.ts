import { useState } from "react"
import { salonApi } from "@/pages/api/getSalonListApi";
import { INFO, handleStorage } from "@/util/handleStorage";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setToast } from "@/store/toastSlice";
import { ReservationState } from "@/types/ReservationTypes"

export const useGetBookings = () => {
    const [bookings, setBookings] = useState<ReservationState[]>([])
    const [cancelReqByUser, setCancelReqByUser] = useState<ReservationState[]>([])
    const [hasEmptyArr, setHasEmptyArr] = useState(false);
    const dispatch = useAppDispatch()
    const userInfo = useAppSelector(state=>state.userInfo.value)
    const condition = useAppSelector(state=>state.condition)
    
    const getShopName = () => {
        if (userInfo.shop === "") {
          const info: { shop: string, tel: string } = JSON.parse(handleStorage.getStorage(INFO));
          return info.shop;
        }
        return userInfo.shop;
      };

      const setConfirmCondition = ()=>{
       if(condition.condition === "확정") return true
       if(condition.condition === "미확정") return false
      }


      const getCancelReqByUser = (reservations:ReservationState[]) => {
        setCancelReqByUser(reservations.filter((reservation)=>reservation.cancel === true))
      }

      const getBookingbyCondition = (reservations:ReservationState[]) =>{
        const notCancleData = reservations.filter((reservation)=>reservation.cancel === false)
        return condition.condition === "날짜" || condition.condition === "전체" ? notCancleData : notCancleData.filter((reservation)=>reservation.confirm === setConfirmCondition())
      }

      const getBookingList = async () => {
        try {
          const { data, status } = await salonApi.getBooking(getShopName());
          if(status === 200){
            data.message === "예약 내역이 없습니다." ? setHasEmptyArr(true) : setHasEmptyArr(false)
          }
          getCancelReqByUser(data.data)
          setBookings(getBookingbyCondition(data.data));
        } catch (error) {
          dispatch(setToast({ type: "error", text: "죄송합니다. 요청 처리에 실패했습니다. 다시 시도해주세요." }));
        }
      };


    return {bookings, getBookingList, hasEmptyArr, cancelReqByUser}
}
