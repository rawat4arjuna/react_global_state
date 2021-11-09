import React from "react";
export const Statehandler = (init = {}) => {
  const [state, set] = React.useState(init);
  const setState = (value) => {
    if (!value || typeof value !== "object")
      throw new Error("Input value is not valid");
    set({ ...state, ...value });
  };
  return { state, setState };
};
