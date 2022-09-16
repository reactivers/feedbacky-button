import classNames from "classnames";
import { FC } from 'react';
import { IFeedbackForm } from "./types";

const FeedbackForm: FC<IFeedbackForm> = ({
    title = "SEND YOUR FEEDBACK",
    sendButtonTitle = "Send",
    value,
    onChange,
    onSendClick
}) => {
    return (
        <>
            <h3 className="w-full text-xl font-extrabold text-center">{title}</h3>
            <div className="mt-4 w-full">
                <textarea value={value}
                    onChange={onChange}
                    className="border-[1px] w-full border-gray-400 rounded-md p-4 max-h-72"
                    maxLength={2000}
                    name="feedback"
                    id=""
                    cols={30}
                    rows={10} />
            </div>
            <div className="flex w-full mt-1">
                <div className="w-full" />
                <div className="self-end text-gray-600">
                    {value.length}/2000
                </div>
            </div>
            <button
                className={classNames("w-full rounded-2xl text-white py-4 mt-4 transition-all", {
                    "bg-orange-500": value.length > 0,
                    "bg-gray-400": value.length === 0,
                })}
                onClick={onSendClick}>
                {sendButtonTitle}
            </button>
        </>
    )
}

export default FeedbackForm