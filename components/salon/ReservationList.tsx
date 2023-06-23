import { useEffect } from "react";
import { useGetBookings } from "./hooks/useGetBookings";
import { useAppSelector } from "@/store/hooks";
import { TitleH } from "@/components/atom/Text";
import Contents from "./Contents";
import DateSelect from "./DateSelect";
import Cancel from "./Cancel";

const ReservationList = () => {
  const { bookings, getBookingList, hasEmptyArr, cancelReqByUser } =
    useGetBookings();
  const condition = useAppSelector((state) => state.condition);

  useEffect(() => {
    getBookingList();
  }, [condition]);

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-4 w-full max-w-lg">
        <TitleH text="예약 내역" plusStyle="w-full text-center" />
        {hasEmptyArr && <TitleH text="예약 내역이 없습니다." />}
        {condition.condition === "날짜" && <DateSelect bookings={bookings} />}
        {condition.condition === "취소" &&
          cancelReqByUser?.map((booking, i) => (
            <Cancel key={`${i}${booking.id}`} booking={booking} />
          ))}
        {condition.condition !== "날짜" &&
          condition.condition !== "취소" &&
          bookings?.map((booking, i) => (
            <Contents key={`${i}${booking.id}`} booking={booking} />
          ))}
      </div>
    </div>
  );
};

export default ReservationList;
