import dynamic from "next/dynamic";
import { useAppSelector } from "@/store/hooks";

const ReservationList = dynamic(
  () => import("@/components/salon/ReservationList")
);
const SalonMenu = dynamic(() => import("@/components/layout/SalonMenu"));
const MyPage = dynamic(() => import("@/components/users/MyPage"));

const SalonHome = () => {
  const condition = useAppSelector((state) => state.condition.condition);

  return (
    <div className="flex justify-between items-start w-screen min-h-screen h-fit">
      <SalonMenu />
      {condition === "정보" ? <MyPage /> : <ReservationList />}
    </div>
  );
};

export default SalonHome;
