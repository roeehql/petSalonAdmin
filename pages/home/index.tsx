import ReservationList from "@/components/salon/ReservationList";
import SalonMenu from "@/components/salon/SalonMenu";

const SalonHome = () => {
  return (
    <div className="flex justify-between items-start w-screen min-h-screen h-fit">
      <SalonMenu />
      <ReservationList />
    </div>
  );
};

export default SalonHome;
