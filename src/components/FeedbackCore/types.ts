import { IFeedbackButton } from "components/FeedbackButton/types";
import { IFeedbackModal } from "components/FeedbackModal/types";
import { FC } from "react";

declare type IFeedbackButtonProps = Omit<IFeedbackButton, "onClick"> | {};
declare type IFeedbackModalProps = Omit<IFeedbackModal, "show" | "onClose"> | {};

interface IFeedbackCore {
    feedbackButton: FC<IFeedbackButton>;
    feedbackButtonProps?: IFeedbackButtonProps;
    feedbackModal: FC<Omit<IFeedbackModal, "onClose">>;
    feedbackModalProps?: IFeedbackModalProps;
}

export type { IFeedbackCore, IFeedbackButtonProps, IFeedbackModalProps };
