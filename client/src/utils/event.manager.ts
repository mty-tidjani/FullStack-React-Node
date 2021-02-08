import EventEmitter from 'events';

const EE = new EventEmitter();

export const emit = (stringEvent: string, ...args: any[]) => {
  EE.emit(stringEvent, ...args);
};

export const listen = (stringEvent: string, callback: (arg: any) => void) => {
  EE.on(stringEvent, callback);
};

export const stopListen = (stringEvent: string, callback: () => void) => {
  EE.removeListener(stringEvent, callback);
};

export const OPEN_LOGIN_MODAL = 'OPEN_LOGIN_MODAL';
