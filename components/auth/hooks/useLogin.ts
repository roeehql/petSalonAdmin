import { useRouter } from "next/router"
import { salonApi } from "@/pages/api/getSalonListApi"
import { useAppDispatch } from "@/store/hooks"
import { setToast } from "@/store/toastSlice"
import { setUserInfo } from "@/store/userInfoSlice"

export const useLogin = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const handleLogin = async ({tel,password}:{tel:string, password:string}) => {
        try{
            const {data, status} = await salonApi.loginSalon({tel,password})
            console.log(data)
            if(status === 200){
                dispatch(setUserInfo({shop:data.shop,tel,token:data.token}))
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