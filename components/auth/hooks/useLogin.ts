import { useRouter } from "next/router"
import { salonApi } from "@/pages/api/getSalonListApi"
import { useAppDispatch } from "@/store/hooks"
import { setToast } from "@/store/toastSlice"
import { setUserInfo } from "@/store/userInfoSlice"
import { setSalonInfo } from "@/store/salonInfoSlice"

export const useLogin = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const handleLogin = async ({tel,password}:{tel:string, password:string}) => {
        try{
            const {data, status} = await salonApi.loginSalon({tel,password})
            if(status === 200){
                dispatch(setSalonInfo({
                    id:data.salonInfo.id,
                    name:data.salonInfo.name,
                    tel: data.salonInfo.tel,
                    address: data.salonInfo.address,
                    canSissorCut: data.salonInfo.canSissorCut,
                    canCatCut: data.salonInfo.canCatCut,
                    hasCctv:data.salonInfo.hasCctv,
                    hasPickupService:data.salonInfo.hasPickupService,
                }))
                dispatch(setUserInfo({shop:data.salonInfo.name,tel,token:data.token}))
                dispatch(setToast({type:"success",text:data.message}))
                router.push("/home")
            }else{
                dispatch(setToast({type:"error", text:data.details}))
            }
        }catch(e){
            dispatch(setToast({type:"error", text:"죄송합니다. 로그인을 다시 시도해주세요."}))
        }
    }

    return { handleLogin }
}