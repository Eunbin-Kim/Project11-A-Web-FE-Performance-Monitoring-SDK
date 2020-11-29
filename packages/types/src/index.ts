export interface Event {
  timeStamp: Date;
  createdBy?: User;
  os?: Os;
  browser?: Browser;
  platform?: string;
  sdk?: Sdk;
  url?: string;
  type?: string; // error.name
  value?: string; // error.message
  stacktrace?: StackTrace[]; // error.stack
}

export interface Sdk {
  version: string;
  name: string;
}

export interface Client {
  id: number;
  email: string;
  projectIds: number[];
}

export interface User {
  ipAdress?: string;
  email?: string;
}

export interface Os {
  version: string;
  name: string;
}

export interface Browser {
  version: string;
  name: string;
}

export interface StackTrace {
  filename?: string;
  function?: string;
  lineno?: number;
  colno?: number;
}

export interface Santry {
  handleUncaughtError(error: Error): void;
  handleUncaughtRejection(rejection: PromiseRejectionEvent): void;
  captureError(error: Error): Event;
  sendEvent(event: Event): void;
  createEventFromError(event: Event, error: Error): Event;
  addUserAgentInfo(event: Event, userAgent: string): void;
}