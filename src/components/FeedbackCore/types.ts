import { IFeedbackButton } from "components/FeedbackButton/types";
import { IFeedbackModal } from "components/FeedbackModal/types";
import { IFeedbackModalContainerProps } from "components/FeedbackModalContainer/types";
import { FC } from "react";

declare type IFeedbackButtonProps = Omit<IFeedbackButton, "onClick">;
declare type IFeedbackModalProps = IFeedbackModal;

interface IFeedbackCore {
  feedbackButton: FC<IFeedbackButton>;
  feedbackButtonProps?: IFeedbackButtonProps;
  feedbackModal: FC<IFeedbackModal>;
  feedbackModalContainerProps?: Omit<
    IFeedbackModalContainerProps,
    "show" | "onClose" | "showModal"
  >;
  feedbackModalProps?: IFeedbackModalProps;
}

export type { IFeedbackCore, IFeedbackButtonProps, IFeedbackModalProps };
