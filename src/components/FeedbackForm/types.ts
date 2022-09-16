import { ChangeEventHandler } from "react";

interface IFeedbackForm {
    title?: string;
    sendButtonTitle?: string;
    value: string;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
    onSendClick: () => Promise<void>;
}

export type { IFeedbackForm };
