import { useAppSelector } from "@/store/hooks";
import { TextP, TitleH } from "../atom/Text";
import { ContactUs } from "./Contact";

const MyPage = () => {
  const salon = useAppSelector((state) => state.salonInfo.value);

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen mb-9">
      <div className=" flex flex-col justify-center items-center w-1/2 h-fit px-4 py-8 my-8 border-2 border-gray-400 rounded shadow">
        <TitleH text="회원 정보" />
        <TextP text={salon.name} plusStyle="py-2" />
        <TextP text={salon.tel} plusStyle="py-2" />
        <TextP text={salon.address} plusStyle="py-2 mb-6" />
        <TitleH text="서비스 정보" plusStyle="border-t-2 border-t-sky-400 " />
        <TextP text={salon.canCatCut ? "고양이 미용 가능 매장" : ""} />
        <TextP text={salon.canSissorCut ? "가위컷 가능 매장" : ""} />
        <TextP
          text={salon.hasCctv ? "매장 내 CCTV 작동 및 제공 가능 매장" : ""}
        />
        <TextP
          text={salon.hasPickupService ? "픽업 서비스 제공 매장" : ""}
          plusStyle="mb-6"
        />
      </div>

      <TextP
        text="매장 정보 변경은 예약한 고객분들에게 혼선을 야기할 수 있으므로, 변경사항 발생 시 운영자에게 연락바랍니다."
        plusStyle=" my-4 w-1/2 text-red-600"
      />
      <ContactUs />
    </div>
  );
};

export default MyPage;
