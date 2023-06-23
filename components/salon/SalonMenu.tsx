import { useRouter } from "next/router";

import { useAppDispatch } from "@/store/hooks";
import { setToast } from "@/store/toastSlice";
import { setCondition } from "@/store/conditionSlice";
import { removeUserInfo } from "@/store/userInfoSlice";
import { useBoolean } from "@/hooks/useBoolean";

import Button from "../atom/Button";
import Confirm from "../atom/Confirm";

const SalonMenu = () => {
  const { isTrue: isReduce, setOpposite } = useBoolean(false);
  const { isTrue: openConfirm, setOpposite: setOpenConfirm } =
    useBoolean(false);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(removeUserInfo());
    dispatch(setToast({ type: "info", text: "로그아웃 되었습니다." }));
    router.push("/");
  };

  return (
    <nav
      className={`fixed top-0 left-0 flex flex-col justify-start items-start ${
        isReduce ? "w-1/12" : "min-w-fit w-1/5 "
      } min-h-screen h-full rounded-md bg-slate-100 shadow-sm`}
    >
      <button
        type="button"
        onClick={setOpposite}
        className="w-full p-4 border-none text-right text-2xl rounded bg-sky-200 cursor-pointer"
      >
        {isReduce ? "➡️" : "⬅️"}
      </button>
      <ul className="flex flex-col justify-start items-start w-full ">
        <SalonLi
          text={isReduce ? "전체보기" : "전체 내역 보기"}
          onClick={() => dispatch(setCondition({ condition: "전체" }))}
        />
        <SalonLi
          text={isReduce ? "확정" : "확정 예약 확인"}
          onClick={() => dispatch(setCondition({ condition: "확정" }))}
        />
        <SalonLi
          text={isReduce ? "미확정" : "미확정 예약 확인"}
          onClick={() => dispatch(setCondition({ condition: "미확정" }))}
        />
        <SalonLi
          text={isReduce ? "날짜별" : "날짜별로 보기"}
          onClick={() => dispatch(setCondition({ condition: "날짜" }))}
        />
        <SalonLi
          text={isReduce ? "취소요청" : "취소 요청 확인"}
          onClick={() => dispatch(setCondition({ condition: "취소" }))}
        />
        <SalonLi
          text={isReduce ? "정보변경" : "매장 정보 변경"}
          onClick={() => router.push("/users")}
        />
      </ul>
      <Button
        type="button"
        text="나가기"
        onClick={() => setOpenConfirm()}
        plusStyle="w-full my-4"
      />
      {openConfirm && (
        <Confirm
          text="로그아웃하시겠습니까?"
          positiveAnswer="네"
          handleConfirmClick={handleLogOut}
          onCancelClick={() => setOpenConfirm()}
        />
      )}
    </nav>
  );
};

export default SalonMenu;

export const SalonLi = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <li
      onClick={onClick}
      className="list-none flex justify-center items-center w-full p-4 border-b-2 border-b-gray-300 bg-white text-base text-gray-900 cursor-pointer hover:bg-sky-200"
    >
      {text}
    </li>
  );
};
