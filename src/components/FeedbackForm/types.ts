import { IFeedbackParams } from "components/FeedbackContext/types";
import { ChangeEventHandler } from "react";

interface IFeedbackForm {
  title?: string;
  sendButtonTitle?: string;
  value: IFeedbackParams;
  onChange: (key: keyof IFeedbackParams, value: string) => void;
  onSendClick: () => Promise<void>;
}

export type { IFeedbackForm };
