"use client";

import { createContext, useContext, useReducer } from "react";

type Response = {
  input: string;
  response: string;
};

type ResponseState = {
  responses: Response[];
};

type ResponseAction = {
  type: "SET_RESPONSES";
  payload: Response;
};

const INITIAL_STATE = {
  responses:
    (JSON.parse(localStorage.getItem("responses") as string) as Response[]) ||
    [],
  dispatch: (action: ResponseAction) => {},
};

const ResponseContext = createContext(INITIAL_STATE);

const ResponseReducer = (state: ResponseState, action: ResponseAction) => {
  switch (action.type) {
    case "SET_RESPONSES":
      const responses = [...state.responses, action.payload];
      localStorage.setItem("responses", JSON.stringify(responses));
      return {
        ...state,
        responses,
      };
    default:
      return state;
  }
};

export const ResponseContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(ResponseReducer, INITIAL_STATE);
  return (
    <ResponseContext.Provider value={{ responses: state.responses, dispatch }}>
      {children}
    </ResponseContext.Provider>
  );
};

export const useResponse = () => useContext(ResponseContext);
