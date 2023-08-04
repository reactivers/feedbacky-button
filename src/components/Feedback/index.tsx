import FeedbackButton from "components/FeedbackButton";
import FeedbackCore from "components/FeedbackCore";
import FeedbackModal from "components/FeedbackModal";
import { FC } from "react";
import { IFeedback } from "./types";

const Feedback: FC<IFeedback> = ({
  feedbackButtonProps,
  feedbackModalProps,
  feedbackModalContainerProps,
}) => {
  return (
    <FeedbackCore
      feedbackButton={FeedbackButton}
      feedbackModal={FeedbackModal}
      feedbackModalContainerProps={feedbackModalContainerProps}
      feedbackButtonProps={feedbackButtonProps}
      feedbackModalProps={feedbackModalProps}
    />
  );
};

export default Feedback;
