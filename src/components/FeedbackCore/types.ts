import { IFeedbackButton } from "components/FeedbackButton/types";
import { IFeedbackModal } from "components/FeedbackModal/types";
import { FC } from "react";

declare type IFeedbackButtonProps = Omit<IFeedbackButton, "onClick"> | {};
declare type IFeedbackModalProps = IFeedbackModal | {};

interface IFeedbackCore {
  feedbackButton: FC<IFeedbackButton>;
  feedbackButtonProps?: IFeedbackButtonProps;
  feedbackModal: FC<IFeedbackModal>;
  feedbackModalProps?: IFeedbackModalProps;
}

export type { IFeedbackCore, IFeedbackButtonProps, IFeedbackModalProps };
