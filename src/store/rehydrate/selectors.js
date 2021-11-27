const root = 'rehydrate';


export const isRehydrated = (state) => {
  let result = true;
  for (let key in state[root]) {
    if (!state[root][key]) {
      result = false;
    }
  }
  return result;
}
