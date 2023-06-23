import { useState } from "react";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";

export const useHandleAddress = () =>{
    const [address , setAddress] = useState("")
    const open = useDaumPostcodePopup()

    const handleComplete = (data: Address) => {
        let fullAddress = data.address;
        let extraAddress = "";
    
        if (data.addressType === "R") {
          if (data.bname !== "") {
            extraAddress += data.bname;
          }
          if (data.buildingName !== "") {
            extraAddress +=
              extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
          }
          fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
    
        setAddress(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
      };

      const resetAddress = () => {
        setAddress("")
        open({onComplete : handleComplete})
      }

      return {handleComplete, address, resetAddress}
}