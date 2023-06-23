import Button from "./Button";
import { TextP } from "./Text";

const Confirm = ({
  text,
  positiveAnswer,
  handleConfirmClick,
  onCancelClick,
}: {
  text: string;
  positiveAnswer: string;
  handleConfirmClick: () => void;
  onCancelClick: () => void;
}) => {
  return (
    <div className="absolute w-full h-full flex justify-center items-center">
      <div className="flex flex-col min-w-1/2 h-fit p-6 bg-white rounded shadow">
        <TextP text={text} plusStyle="w-full text-center mb-4" />
        <div>
          <Button
            type="button"
            text={positiveAnswer}
            onClick={handleConfirmClick}
            plusStyle="mr-4"
          />
          <Button
            type="button"
            text="취소"
            onClick={onCancelClick}
            plusStyle="sepia"
          />
        </div>
      </div>
    </div>
  );
};

export default Confirm;
