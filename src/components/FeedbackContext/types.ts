interface IResponse {
    success: boolean;
    result: any;
}

interface IFeedbackParams {
    feedback: string;
}

interface IFeedbackProvider {
    url: string;
    username?: string;
}

interface IFeedbackContext {
    sendFeedback: (params: IFeedbackParams) => Promise<IResponse>
}

export type { IFeedbackParams, IFeedbackContext, IFeedbackProvider, IResponse };
