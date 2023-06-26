import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearSalonInfo } from "@/store/salonInfoSlice";
import { removeUserInfo, saveUserInfo } from "@/store/userInfoSlice";

import Confirm from "@/components/atom/Confirm";
import Loading from "@/components/atom/Loading";
const LoginSalon = dynamic(() => import("@/components/auth/LoginSalon"), {
  loading: () => <Loading />,
});

export default function Home() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.userInfo.value);

  const handleResetInfo = () => {
    dispatch(removeUserInfo());
    dispatch(clearSalonInfo());
  };

  useEffect(() => {
    dispatch(saveUserInfo());
  }, []);

  return (
    <>
      {userInfo.tel !== "" && (
        <Confirm
          text="잘못된 접근입니다. 취소를 누르시면 다시 로그인 하셔야 이용가능합니다. 홈 화면으로 이동하시겠습니까?"
          positiveAnswer="네"
          handleConfirmClick={() => router.push("/home")}
          onCancelClick={handleResetInfo}
        />
      )}
      <LoginSalon />
    </>
  );
}
