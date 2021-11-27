import * as AT from './actionTypes';



export const clear = () => ({
  type: AT.CLEAR,
});

export const update = () => ({
  type: AT.UPDATE,
});

export const setPersistRehydrate = (data) => ({
  type: AT.SET_PERSIST_REHYDRATE,
  payload: data,
});

export const rehydrated = () => ({
  type: AT.REHYDRATED,
});
