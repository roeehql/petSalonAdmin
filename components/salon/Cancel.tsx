import { useBoolean } from "@/hooks/useBoolean";
import { useSetConfirm } from "./hooks/useSetConfirm";

import { ReservationState } from "@/types/ReservationTypes";

import Button from "../atom/Button";
import Confirm from "../atom/Confirm";
import { TitleH, TextP } from "../atom/Text";

const Cancel = ({ reservation }: { reservation: ReservationState }) => {
  const { isTrue: openCancel, setOpposite: setOpenCancel } = useBoolean(false);
  const { setConfirm: setCancel } = useSetConfirm(reservation.id);

  const handleSetCancel = () => {
    const editedReservation = { ...reservation };
    editedReservation.cancel = true;
    setCancel(editedReservation);
    setOpenCancel();
  };

  return (
    <div
      id={reservation.id}
      className="flex flex-col justify-center items-center w-full h-fit p-4 my-3 border-2 border-gray-400 rounded shadow"
    >
      <div className="flex flex-col justify-around items-baseline w-full h-fit border-b-2 border-b-gray-400">
        <TitleH text="예약자 정보" plusStyle="w-full text-center" />
        <TextP
          text={`이름 : ${reservation.name}`}
          plusStyle="w-full text-left"
        />
        <TextP
          text={`연락처 : ${reservation.tel}`}
          plusStyle="w-full text-left"
        />
        <TextP
          text={`날짜: ${reservation.date}`}
          plusStyle="w-full text-left"
        />
        <TextP
          text={`시간: ${reservation.time}`}
          plusStyle="w-full text-left mb-4"
        />
      </div>
      {reservation.cancel ? (
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
