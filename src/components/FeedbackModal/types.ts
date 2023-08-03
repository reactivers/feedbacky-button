import { IFeedbackParams } from "components/FeedbackContext/types";

interface IFeedbackModal {
  title?: string;
  sendButtonTitle?: string;
  onSend?: (value: IFeedbackParams) => void;
}

export type { IFeedbackModal };
