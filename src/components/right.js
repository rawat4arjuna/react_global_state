import React from "react";
import { SET_DATA_EMIT } from "../services/event.handle.services";
import { GetEventData } from "../services/state.handle.services";
export default function Right() {
  const { state } = GetEventData();
  const HandleEvent = () => {
    SET_DATA_EMIT({ count: state.count - 1 });
  };

  return (
    <div>
      <button onClick={HandleEvent}>CLICK RIGHT</button>
    </div>
  );
}
