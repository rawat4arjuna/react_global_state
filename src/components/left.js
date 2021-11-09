import React from "react";
import { SET_DATA_EMIT } from "../services/event.handle.services";
import { GetEventData } from "../services/state.handle.services";
export default function Left() {
  const { state } = GetEventData();
  const HandleEvent = () => {
    SET_DATA_EMIT({ count: state.count + 1 });
  };
  return (
    <div>
      <h1>Count:{state.count}</h1>
      <button onClick={HandleEvent}>CLICK LEFT</button>
    </div>
  );
}
