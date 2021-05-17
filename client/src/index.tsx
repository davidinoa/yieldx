import "grid/setAgGridLicenseKey";
import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "chartjs-plugin-piechart-outlabels";
import AppLayout from "components/AppLayout/AppLayout";
import { worker } from "__mocks__/browser";
import GraphqlProvider from "providers/graphql";
import "./index.scss";
import { ThemeProvider } from "styled-components";
import { AlertProvider } from "providers/alerts/AlertProvider";

dayjs.extend(utc);
dayjs.extend(timezone);
const App = React.lazy(() => import("./App"));
if (
  process.env.NODE_ENV === "development" ||
  window.location.host === "dev.yieldx.app"
) {
  worker.start();
}

export const lightTheme = {
  color: "#000",
  background: "white",
  backgroundColor: "var(--lightest)"
};

ReactDOM.render(
  <GraphqlProvider>
    <AlertProvider>
      <RecoilRoot>
        <ThemeProvider theme={{}}>
          <BrowserRouter basename="yieldx">
            <AppLayout>
              <App />
            </AppLayout>
          </BrowserRouter>
        </ThemeProvider>
      </RecoilRoot>
    </AlertProvider>
  </GraphqlProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
