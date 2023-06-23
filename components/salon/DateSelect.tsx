import { setCondition } from "@/store/conditionSlice";
import { useAppDispatch } from "@/store/hooks";
import { ReservationState } from "@/types/ReservationTypes";
import { ChangeEvent, useState } from "react";
import Contents from "./Contents";

const DateSelect = ({ bookings }: { bookings: ReservationState[] }) => {
  const dispatch = useAppDispatch();
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <label
          htmlFor="booking-date"
          className="w-full text-center text-2xl my-4"
        >
          예약 날짜 내역
        </label>
        <select
          className="p-4 rounded shadow outline-none border-2 border-sky-300"
          id="booking-date"
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setSelectedDate(e.target.value)
          }
        >
          <option className="px-2 py-3">날짜를 선택하세요</option>
          {bookings.map((booking, i) => (
            <option key={i} value={booking.date} className="px-2 py-3">
              {booking.date} - {booking.time}
            </option>
          ))}
        </select>
      </div>
      {bookings
        .filter((booking) => booking.date === selectedDate)
        .map((selectedBooking, i) => (
          <Contents
            key={`${i}${selectedBooking.id}`}
            booking={selectedBooking}
          />
        ))}
    </>
  );
};

export default DateSelect;
