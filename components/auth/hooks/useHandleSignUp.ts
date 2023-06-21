import { useRouter } from "next/router"
import { salonApi } from "@/pages/api/getSalonListApi"
import { Salons } from "@/types/salonsTypes"
import { useAppDispatch } from "@/store/hooks"
import { setToast } from "@/store/toastSlice"
import { setUserInfo } from "@/store/userInfoSlice"

const useHandleSignUp = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()

  const handleSubmit = async(salon:Salons)=>{
    try{
        const {data, status} = await salonApi.createSalon(salon)
        if(status === 200){
          dispatch(setUserInfo({shop:salon.name, tel:salon.tel , token: data.token}))
          dispatch(setToast({type:"success", text:data.message}))
          router.push("/home")
        }else{
          dispatch(setToast({type:"warning", text:"이미 존재하는 정보입니다."}))
        }
    }catch(e){
        dispatch(setToast({type:"error", text:"죄송합니다. 문제가 발생해 회원가입을 성공하지 못했습니다."}))
    }
  }

  return {handleSubmit }
}

export default useHandleSignUp