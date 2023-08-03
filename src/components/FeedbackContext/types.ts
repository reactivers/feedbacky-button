interface IResponse {
  success: boolean;
  result: any;
}

interface IFeedbackParams {
  username?: string;
  name?: string;
  feedback: string;
}

interface IFeedbackProvider {
  url: string;
  showEmailField?: boolean;
  showNameField?: boolean;
  username?: string;
}

interface IFeedbackContext {
  showEmailField?: boolean;
  showNameField?: boolean;
  sendFeedback: (params: IFeedbackParams) => Promise<IResponse>;
}

export type { IFeedbackParams, IFeedbackContext, IFeedbackProvider, IResponse };
