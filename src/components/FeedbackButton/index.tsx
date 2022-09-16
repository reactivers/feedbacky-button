import { FC } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { IFeedbackButton } from "./types";

const FeedbackButton: FC<IFeedbackButton> = ({
    classNames = "",
    icon = <AiOutlineMessage />,
    onClick
}) => {
    return (
        <div className={`min-w-[64px] min-h-[64px] w-16 h-16 rounded-full bg-orange-500 cursor-pointer flex items-center justify-center text-white text-3xl ${classNames}`}
            onClick={onClick}>
            {icon}
        </div>
    )
};

export default FeedbackButton;