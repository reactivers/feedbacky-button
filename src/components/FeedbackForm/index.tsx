import classNames from "classnames";
import { FC } from "react";
import { IFeedbackForm } from "./types";
import useFeedback from "components/FeedbackContext/hook";
import { Show } from "@reactivers/show";

const FeedbackForm: FC<IFeedbackForm> = ({
  title = "SEND YOUR FEEDBACK",
  sendButtonTitle = "Send",
  value,
  onChange,
  onSendClick,
}) => {
  const { showEmailField, showNameField } = useFeedback();
  return (
    <>
      <h3 className="w-full text-xl font-extrabold text-center">{title}</h3>
      <Show showIf={!!showEmailField}>
        <div className="mt-4 w-full">
          <input
            placeholder="E-mail"
            value={value.username}
            name="email"
            autoComplete="email"
            className="border-[1px] w-full border-gray-400 rounded-md p-4"
            onChange={(e) => onChange("username", e.target.value)}
          />
        </div>
      </Show>
      <Show showIf={!!showNameField}>
        <div className="mt-4 w-full">
          <input
            placeholder="Name"
            value={value.name}
            name="name"
            autoComplete="name"
            className="border-[1px] w-full border-gray-400 rounded-md p-4"
            onChange={(e) => onChange("name", e.target.value)}
          />
        </div>
      </Show>
      <div className="mt-4 w-full">
        <textarea
          value={value.feedback}
          onChange={(e) => onChange("feedback", e.target.value)}
          className="border-[1px] w-full border-gray-400 rounded-md p-4 max-h-72"
          maxLength={2000}
          name="feedback"
          cols={30}
          rows={10}
        />
      </div>
      <div className="flex w-full mt-1">
        <div className="w-full" />
        <div className="self-end text-gray-600">
          {value.feedback.length}/2000
        </div>
      </div>
      <button
        className={classNames(
          "w-full rounded-2xl text-white py-4 mt-4 transition-all",
          {
            "bg-orange-500": value.feedback.length > 0,
            "bg-gray-400": value.feedback.length === 0,
          }
        )}
        onClick={onSendClick}
      >
        {sendButtonTitle}
      </button>
    </>
  );
};

export default FeedbackForm;
