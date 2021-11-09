import React from "react";
import { Statehandler } from "./state";
import { GET_DATA_ON } from "./event.handle.services";
export const GetEventData = (init = {}) => {
  const { prev, state, setState } = Statehandler(init);
  React.useEffect(() => {
    GET_DATA_ON((value) => {
      setState(value);
    });
  }, []);
  return { state, prev };
};
