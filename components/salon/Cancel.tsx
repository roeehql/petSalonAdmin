import { useBoolean } from "@/hooks/useBoolean";
import { ReservationState } from "@/types/ReservationTypes";
import Button from "../atom/Button";
import Confirm from "../atom/Confirm";
import { TitleH, TextP } from "../atom/Text";
import { useSetConfirm } from "./hooks/useSetConfirm";

const Cancel = ({ booking }: { booking: ReservationState }) => {
  const { isTrue: openCancel, setOpposite: setOpenCancel } = useBoolean(false);
  const { setConfirm: setCancel } = useSetConfirm(booking.id);

  const handleSetCancel = () => {
    const reservation = { ...booking };
    reservation.cancel = true;
    setCancel(reservation);
    setOpenCancel();
  };

  return (
    <div
      id={booking.id}
      className="flex flex-col justify-center items-center w-full h-fit p-4 my-3 border-2 border-gray-400 rounded shadow"
    >
      <div className="flex flex-col justify-around items-baseline w-full h-fit border-b-2 border-b-gray-400">
        <TitleH text="예약자 정보" plusStyle="w-full text-center" />
        <TextP text={`이름 : ${booking.name}`} plusStyle="w-full text-left" />
        <TextP text={`연락처 : ${booking.tel}`} plusStyle="w-full text-left" />
        <TextP text={`날짜: ${booking.date}`} plusStyle="w-full text-left" />
        <TextP
          text={`시간: ${booking.time}`}
          plusStyle="w-full text-left mb-4"
        />
      </div>
      {booking.cancel ? (
        <TextP text="취소 처리 되었습니다." plusStyle="mt-4" />
      ) : (
        <Button
          type="button"
          text="취소 승인"
          onClick={() => setOpenCancel()}
          plusStyle="w-full"
        />
      )}
      {openCancel && (
        <Confirm
          text="취소를 승인하시겠습니까?"
          positiveAnswer="승인"
          handleConfirmClick={handleSetCancel}
          onCancelClick={() => setOpenCancel()}
        />
      )}
    </div>
  );
};

export default Cancel;
