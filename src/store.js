import React from "react";
import { Statehandler } from "./services/state";
import { SET_DATA_ON, GET_DATA_EMIT } from "./services/event.handle.services";
import STATE from "./initialState";
const Store = (props) => {
  const { state, setState } = Statehandler(STATE);
  React.useEffect(() => {
    SET_DATA_ON((value) => {
      setState(value);
    });
  }, []);
  React.useEffect(() => {
    GET_DATA_EMIT(state);
  }, [state]);
  return <div>{props.children}</div>;
};
export default class GlobalStore extends React.Component {
  state = {
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    if (error) {
      this.setState({
        error: error,
        errorInfo: errorInfo,
      });
    }
  }
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return <Store {...this.props} />;
  }
}
