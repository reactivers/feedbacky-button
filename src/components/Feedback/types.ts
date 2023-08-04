import {
  IFeedbackButtonProps,
  IFeedbackModalProps,
} from "components/FeedbackCore/types";
import { IFeedbackModalContainerProps } from "components/FeedbackModalContainer/types";

interface IFeedback {
  feedbackModalContainerProps?: Omit<
    IFeedbackModalContainerProps,
    "show" | "onClose" | "showModal"
  >;
  feedbackButtonProps?: IFeedbackButtonProps;
  feedbackModalProps?: IFeedbackModalProps;
}

export type { IFeedback };
