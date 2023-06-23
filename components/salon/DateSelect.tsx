import { ChangeEvent, useState } from "react";
import { ReservationState } from "@/types/ReservationTypes";
import Contents from "./Contents";

const DateSelect = ({ reservations }: { reservations: ReservationState[] }) => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <label
          htmlFor="reservation-date"
          className="w-full text-center text-2xl my-4"
        >
          예약 날짜 내역
        </label>
        <select
          className="p-4 rounded shadow outline-none border-2 border-sky-300"
          id="reservation-date"
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setSelectedDate(e.target.value)
          }
        >
          <option className="px-2 py-3">날짜를 선택하세요</option>
          {reservations.map((reservation, i) => (
            <option key={i} value={reservation.date} className="px-2 py-3">
              {reservation.date} - {reservation.time}
            </option>
          ))}
        </select>
      </div>
      {reservations
        .filter((reservation) => reservation.date === selectedDate)
        .map((selectedreservation, i) => (
          <Contents
            key={`${i}${selectedreservation.id}`}
            reservation={selectedreservation}
          />
        ))}
    </>
  );
};

export default DateSelect;
