import { getGlobalObject } from '@santry/utils';
import { NodeSantry } from './nodeSantry';
import { Options } from '@santry/types';
import { initWithClass } from '@santry/core';

export const init = (dsn: string, options: Options): void => {
  initWithClass(NodeSantry, dsn, options);
};

export const captureError = (error: Error): void => {
  const { santry } = getGlobalObject<Window>();
  santry.hub.captureError(error);
};
