interface IFeedbackModal {
    title?: string;
    sendButtonTitle?: string;
    onSend?: (value: string) => void;
    show: boolean;
    onClose: () => void;
}

export type { IFeedbackModal };
