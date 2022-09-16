import { FC, PropsWithChildren } from "react";
import FeedbackContext from "./context";
import { IFeedbackParams, IFeedbackProvider, IResponse } from "./types";

const FeedbackProvider: FC<PropsWithChildren<IFeedbackProvider>> = ({
    url,
    username,
    children,
}) => {

    const sendFeedback: (params: IFeedbackParams) => Promise<IResponse> = async (params) => {
        try {
            const body = JSON.stringify({
                ...params,
                username,
                url: location.href
            });

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body
            });
            const json = await response.json();
            console.log("json", json)
            return {
                success: true,
                result: json
            } as IResponse

        } catch (e) {
            return {
                success: false,
                result: e
            } as IResponse
        }
    }

    return (
        <FeedbackContext.Provider value={{
            sendFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackProvider;