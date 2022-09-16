import FeedbackButton from "components/FeedbackButton"
import FeedbackCore from "components/FeedbackCore"
import FeedbackModal from "components/FeedbackModal"
import { FC } from "react"
import { IFeedback } from "./types"

const Feedback: FC<IFeedback> = ({
    feedbackButtonProps,
    feedbackModalProps
}) => {
    return (
        <FeedbackCore
            feedbackButton={FeedbackButton}
            feedbackModal={FeedbackModal}
            feedbackButtonProps={feedbackButtonProps}
            feedbackModalProps={feedbackModalProps}
        />
    )
}

export default Feedback