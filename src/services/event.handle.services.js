import Emitter from "./events";
import { Event } from "../constants/event_names";

export const SET_DATA_EMIT = (value) => {
  Emitter.emit(Event.SET_DATA, value);
};
export const SET_DATA_ON = (func) => {
  Emitter.on(Event.SET_DATA, (value) => func(value));
};
export const SET_DATA_OFF = () => {
  Emitter.off(Event.SET_DATA);
};
export const GET_DATA_EMIT = (value) => {
  Emitter.emit(Event.GET_DATA, value);
};
export const GET_DATA_ON = (func) => {
  Emitter.on(Event.GET_DATA, (value) => func(value));
};
export const GET_DATA_OFF = () => {
  Emitter.off(Event.GET_DATA);
};
