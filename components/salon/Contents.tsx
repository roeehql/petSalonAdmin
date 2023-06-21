import { useSetConfirm } from "./hooks/useSetConfirm";
import { useBoolean } from "@/hooks/useBoolean";
import { ReservationState } from "@/types/ReservationTypes";
import { TextP, TitleH } from "@/components/atom/Text";
import Button from "@/components/atom/Button";
import Confirm from "../atom/Confirm";

const Contents = ({ booking }: { booking: ReservationState }) => {
  const { isTrue: openConfirm, setOpposite: setOpenConfirm } =
    useBoolean(false);
  const { setConfirm } = useSetConfirm(booking.id);

  const handleSetConfirm = () => {
    const reservation = { ...booking };
    reservation.confirm = true;
    setConfirm(reservation);
    setOpenConfirm();
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
        <TextP text={`시간: ${booking.time}`} plusStyle="w-full text-left" />
        <TitleH text="반려동물 정보" plusStyle="w-full text-center" />
        <TextP
          text={booking.catCut ? "✅고양이 미용" : ""}
          plusStyle="w-full text-left"
        />
        <TextP
          text={`이름 : ${booking.petName}`}
          plusStyle="w-full text-left"
        />
        <TextP
          text={`몸무게: ${booking.petWeight}`}
          plusStyle="w-full text-left"
        />
        <TitleH text="추가 사항" plusStyle="w-full text-center" />
        <textarea
          readOnly
          value={booking.requestMemo}
          className="resize-none w-full text-left"
        />
        <TextP
          text={booking.sissorCut ? "가위컷 이용" : ""}
          plusStyle="w-full text-left"
        />
        <TextP
          text={booking.pickUpService ? "픽업서비스 이용" : ""}
          plusStyle="w-full text-left mb-4"
        />
      </div>
      <div className=" w-3/4 my-4 text-center">
        {booking.confirm ? (
          "승인된 예약입니다."
        ) : (
          <Button
            type="button"
            text="승인"
            onClick={() => setOpenConfirm()}
            plusStyle="w-full"
          />
        )}
      </div>
      {openConfirm && (
        <Confirm
          text="예약을 승인하면 고객의 요청이 발생하지 않는 이상 취소할 수 없습니다. 지금 승인하시겠습니까?"
          positiveAnswer="승인"
          handleConfirmClick={handleSetConfirm}
          onCancelClick={() => setOpenConfirm()}
        />
      )}
    </div>
  );
};

export default Contents;
