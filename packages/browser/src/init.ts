import { getGlobalObject } from '@santry/utils';
import { Options } from '@santry/types';
import { BrowserSantry } from './browserSantry';
import { initWithClass } from '@santry/core';

export const init = (dsn: string, options: Options) => {
  initWithClass(BrowserSantry, dsn, options);
};

export const captureError = (error: Error): void => {
  const { santry } = getGlobalObject<Window>();
  santry.hub.captureError(error);
};

export const captureMessage = (message: string): void => {
  const { santry } = getGlobalObject<Window>();
  santry.hub.captureMessage(message);
};

export const setContext = (title: string, contents: any): void => {
  const { santry } = getGlobalObject<Window>();
  santry.hub.setContext(title, contents);
};

export const setLevel = (level: string): void => {
  const { santry } = getGlobalObject<Window>();
  santry.hub.setLevel(level);
};
