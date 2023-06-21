import { useEffect } from "react";
import { useGetBookings } from "./hooks/useGetBookings";
import { TitleH } from "@/components/atom/Text";
import Contents from "./Contents";
import { useAppSelector } from "@/store/hooks";

const ReservationList = () => {
  const { bookings, getBookingList, hasEmptyArr } = useGetBookings();
  const condition = useAppSelector((state) => state.condition);

  useEffect(() => {
    getBookingList();
  }, [condition]);

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-4 w-full max-w-lg">
        <TitleH text="예약 내역" plusStyle="w-full text-center" />
        {hasEmptyArr && <TitleH text="예약 내역이 없습니다." />}
        {bookings?.map((booking, i) => (
          <Contents key={`${i}${booking.id}`} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default ReservationList;
