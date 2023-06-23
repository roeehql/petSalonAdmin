import dynamic from "next/dynamic";
const ReservationList = dynamic(
  () => import("@/components/salon/ReservationList")
);
const SalonMenu = dynamic(() => import("@/components/salon/SalonMenu"));

const SalonHome = () => {
  return (
    <div className="flex justify-between items-start w-screen min-h-screen h-fit">
      <SalonMenu />
      <ReservationList />
    </div>
  );
};

export default SalonHome;
