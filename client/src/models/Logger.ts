/* eslint-disable @typescript-eslint/no-explicit-any */
import debug from "debug";

const colors: Record<string, string> = {
  debug: "#54c1e9",
  info: "#8cd10d",
  warn: "#fac848",
  error: "#f95c5a"
};

class Logger {
  private readonly enabled: boolean;

  constructor() {
    this.enabled = process.env.NODE_ENV !== "production";
  }

  debug(...args: any[]) {
    if (this.enabled) {
      Logger.generateMessage("debug", args);
    }
  }

  info(...args: any[]) {
    if (this.enabled) {
      Logger.generateMessage("info", args);
    }
  }

  warn(...args: any[]) {
    if (this.enabled) {
      Logger.generateMessage("warn", args);
    }
  }

  error(...args: any[]) {
    if (this.enabled) {
      Logger.generateMessage("error", args);
    }
  }

  private static generateMessage(level: string, args: any[]) {
    const createDebug = debug(`yieldx:${level}`);
    createDebug.color = colors[level];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    createDebug(...args);
  }
}

const logger = new Logger();

export default logger;
