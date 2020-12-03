import { getGlobalObject } from '@santry/utils';
import { NodeSantry } from './nodeSantry';
import { Options, Message, Dsn, Title, Context } from '@santry/types';
import { initWithClass } from '@santry/core';

const { santry } = getGlobalObject<NodeJS.Global>();

export const init = (dsn: Dsn, options: Options): void => {
  initWithClass(NodeSantry, dsn, options);
};

export const captureError = (error: Error): void => {
  santry.hub.captureError(error);
};

export const captureMessage = (message: Message): void => {
  santry.hub.captureMessage(message);
};

export const setContext = (title: Title, context: Context): void => {
  santry.hub.setContext(title, context);
};

export const setLevel = (level: string): void => {
  santry.hub.setLevel(level);
};
