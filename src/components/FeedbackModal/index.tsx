import useFeedback from "components/FeedbackContext/hook";
import FeedbackForm from "components/FeedbackForm";
import useFeedbackModal from "components/FeedbackModalContainer/hook";
import { ChangeEventHandler, FC, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IFeedbackModal } from "./types";
import { IFeedbackParams } from "components/FeedbackContext/types";

const initialValues: IFeedbackParams = {
  name: "",
  username: "",
  feedback: "",
};

const FeedbackModal: FC<IFeedbackModal> = ({
  sendButtonTitle,
  title,
  onSend,
}) => {
  const { closeModal } = useFeedbackModal();
  const [showSuccessFeedback, setShowSuccessFeedback] = useState(false);
  const { sendFeedback } = useFeedback();
  const [value, setValue] = useState<IFeedbackParams>(initialValues);

  const onChange = (key: keyof IFeedbackParams, value: string) => {
    setValue((old) => ({
      ...old,
      [key]: value,
    }));
  };

  const onSendClick = async () => {
    const { success } = await sendFeedback(value);
    if (success) {
      if (!!onSend) onSend(value);
      setValue(initialValues);
      setShowSuccessFeedback(true);
    }
  };

  return (
    <div className="w-[320px] sm:w-[600px] min-h-[200px] w-full bg-white rounded-lg p-4">
      <div className="flex items-start justify-between w-full">
        <div></div>
        <div className="mt-3 text-xl cursor-pointer" onClick={closeModal}>
          <AiOutlineClose />
        </div>
      </div>
      {showSuccessFeedback ? (
        <div className="text-3xl text-green-500 text-center flex items-center justify-center h-[200px]">
          <h3 className="font-bold text-3xl p-4">WE HAVE GOT YOUR FEEDBACK</h3>
        </div>
      ) : (
        <FeedbackForm
          value={value}
          title={title}
          sendButtonTitle={sendButtonTitle}
          onChange={onChange}
          onSendClick={onSendClick}
        />
      )}
    </div>
  );
};

export default FeedbackModal;
