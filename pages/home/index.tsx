import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useAppSelector } from "@/store/hooks";
import Loading from "@/components/atom/Loading";

const ReservationList = dynamic(
  () => import("@/components/salon/ReservationList"),
  { loading: () => <Loading /> }
);
const SalonMenu = dynamic(() => import("@/components/layout/SalonMenu"));
const MyPage = dynamic(() => import("@/components/users/MyPage"));

const SalonHome = () => {
  const router = useRouter();
  const condition = useAppSelector((state) => state.condition.condition);
  const userInfo = useAppSelector((state) => state.userInfo.value.tel);

  if (userInfo === "") {
    setTimeout(() => {
      router.push("/");
    }, 2000);
    return <Loading />;
  }

  return (
    <div className="flex justify-between items-start w-screen min-h-screen h-fit">
      <SalonMenu />
      {condition === "정보" ? <MyPage /> : <ReservationList />}
    </div>
  );
};

export default SalonHome;
