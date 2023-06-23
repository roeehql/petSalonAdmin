import { useEffect } from "react";
import { useGetreservations } from "./hooks/useGetReservations";
import { useAppSelector } from "@/store/hooks";
import { TitleH } from "@/components/atom/Text";
import Contents from "./Contents";
import DateSelect from "./DateSelect";
import Cancel from "./Cancel";

const ReservationList = () => {
  const { reservations, getreservationList, hasEmptyArr, cancelReqByUser } =
    useGetreservations();
  const condition = useAppSelector((state) => state.condition.condition);

  useEffect(() => {
    getreservationList();
  }, [condition]);

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-4 w-full max-w-lg">
        <TitleH text="예약 내역" plusStyle="w-full text-center" />
        {hasEmptyArr && <TitleH text="예약 내역이 없습니다." />}
        {condition === "날짜" && <DateSelect reservations={reservations} />}
        {condition === "취소" &&
          cancelReqByUser?.map((reservation, i) => (
            <Cancel key={`${i}${reservation.id}`} reservation={reservation} />
          ))}
        {condition !== "날짜" &&
          condition !== "취소" &&
          reservations?.map((reservation, i) => (
            <Contents key={`${i}${reservation.id}`} reservation={reservation} />
          ))}
      </div>
    </div>
  );
};

export default ReservationList;
