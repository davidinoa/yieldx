import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import ErrorAlert from "../Alert/ErrorAlert";
import NotFound404 from "../ErrorPages/NotFound404";

interface State {
  hasError: boolean;
  error: null | Error;
}

class ErrorBoundary extends React.Component<RouteComponentProps, State> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error | null) {
    return {
      hasError: true,
      error
    };
  }

  render() {
    const { hasError, error } = this.state;
    const { children, history } = this.props;

    if (hasError && error?.message === "EDIT_PORTFOLIO_NOT_FOUND")
      return (
        <NotFound404
          topText="the portfolio being edited"
          bottomText="was not found"
          buttonText="Go to portfolio list"
          onClick={() => history.push("/portfolios")}
        />
      );
    if (hasError && error?.message === "PORTFOLIO_NOT_FOUND")
      return (
        <NotFound404
          topText="sorry, this portfolio"
          bottomText="was not found"
          buttonText="Go to portfolio list"
          onClick={() => history.push("/portfolios")}
        />
      );
    if (hasError) {
      return (
        <ErrorAlert
          data-testid="error-boundary"
          message={error?.message || "Unexpected error occurred"}
        />
      );
    }
    return children;
  }
}

export default withRouter(ErrorBoundary);
