interface IFeedbackModal {
    title?: string;
    sendButtonTitle?: string;
    onSend?: (value: string) => void;
}

export type { IFeedbackModal };
