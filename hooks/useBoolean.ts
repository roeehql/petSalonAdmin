import { useState } from "react"

export const useBoolean = (initial:boolean) => {
    const [isTrue, setIsTrue] = useState(initial);

    const setTrue = () => setIsTrue(true);
    const setFalse = () => setIsTrue(false);
    const setOpposite = () => setIsTrue(!isTrue);

    return {isTrue, setTrue, setFalse, setOpposite}
}