import { useCallback, useEffect, useState } from "react";
import constate from "constate";

const DEBUG_ALERTS = true;
export enum AlertLevel {
  warning,
  danger,
  pending,
  success
}

export enum AlertMessage {
  Unexpected = "Sorry an unexpected error has occured",
  Unknown = "Unknown error has occured"
}
//   ResetPasswordError = ,
//   "string" = ""
// }

type ValueOf<T> = T[keyof T];

const AlertColorMap: Record<AlertLevel, string> = {
  [AlertLevel.warning]: "#ffa15e",
  [AlertLevel.danger]: "#FF5252",
  [AlertLevel.pending]: "#FAE369",
  [AlertLevel.success]: "#00e8a0"
};

// const AlertMessageLevel: Record<AlertMessage, AlertLevel> = {
//   [AlertMessage.Unexpected]: AlertLevel.warning,
//   [AlertMessage.Unknown]: AlertLevel.warning,
//   [AlertMessage.ResetPasswordError]: AlertLevel.danger
// };

type Alert = {
  type: AlertLevel;
  message: AlertMessage | string;
};

type AlertOptions = {
  onClose?: () => void;
  onClick?: () => void;
  color?: ValueOf<typeof AlertColorMap>;
  timeout?: number;
  disabled?: boolean;
  buttonText?: string;
};

type AlertState = {
  alert?: Alert & AlertOptions;
  triggerAlert: (
    message: string,
    type: AlertLevel,
    withOptions?: AlertOptions
  ) => void;
  closeAlert: () => void;
  debugAlerts: boolean;
};

function useAlert(): AlertState {
  const [alert, setAlert] = useState<Alert & AlertOptions>();

  const closeAlert = useCallback(() => {
    if (alert) {
      const close = alert?.onClose;
      close && close();
      setAlert(undefined);
    }
  }, [alert, setAlert]);

  const timeout = alert ? alert.timeout : null;

  useEffect(() => {
    if (timeout) {
      const tid = setTimeout(() => {
        closeAlert();
      }, timeout || 10000);
      return () => clearTimeout(tid);
    }
    return () => null;
  }, [timeout, closeAlert]);

  const triggerAlert = useCallback(
    (message: string, type: AlertLevel, withOptions: AlertOptions = {}) => {
      if (!alert || alert.message !== message || alert.type !== type) {
        setAlert({
          type,
          message,
          ...withOptions,
          color: withOptions.color || AlertColorMap[type]
        });
      }
    },
    [alert, setAlert]
  );

  return {
    alert,
    triggerAlert,
    closeAlert,
    debugAlerts: DEBUG_ALERTS
  };
}

export const [
  AlertProvider,
  useAlertContext,
  useAlertState,
  useTriggerAlert,
  useCloseAlert
] = constate(
  useAlert,
  value => value,
  value => value.alert,
  value => value.triggerAlert,
  value => value.closeAlert
);
