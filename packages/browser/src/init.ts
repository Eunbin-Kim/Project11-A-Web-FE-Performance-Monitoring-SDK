import { getGlobalObject } from '@santry/utils';
import { SantryClass } from '@santry/types';
import { BrowserSantry } from './browserSantry';

const initWithClass = (
  santryClass: SantryClass,
  dsn: string,
  options: Options,
): void => {
  const santry = new santryClass(dsn, options);
  const globalObject = getGlobalObject();
  globalObject.santry = {
    dsn,
    hub: santry,
  };
};

export const init = (dsn: string, options: Options) => {
  initWithClass(BrowserSantry, dsn, options);
};

export const captureError = (error: Error): void => {
  const { santry } = getGlobalObject<Window>();
  santry.hub.captureError(error);
};
