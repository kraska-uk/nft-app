import { compose, curry, map, mergeDeepLeft } from 'ramda';



const getAuthOptions = (params) => {
  const { guid, token } = params;
  return ({
    headers: {
      'X-GUID': guid,
      Authorization: `JWT ${token}`,
    }
  })
}


const injectAuthCredentials = curry(
  (getAuthCredentials, reauthenticate, request, options) =>
    compose(
      request,
      mergeDeepLeft(options),
      getAuthOptions
    )(getAuthCredentials()).catch(error => {
      // 🚨!
      // 401 status means access token expired
      // BAD_2FA type means 2fa required by Exchange
      // There may be other errors that are status 401 that should be whitelisted
      // Otherwise yield api call can return reauth actionType (@EVENT.PROFILE.SIGN_IN)
      if (
        error.status !== 401 ||
        error.type === 'UNKNOWN_USER' ||
        error.type === 'NO_TRADE_PERMISSION' ||
        error.type === 'INVALID_CREDENTIALS' ||
        error.type === 'BAD_2FA'
      )
        throw error;

      return reauthenticate();
    })
)


export default (http, getAuthCredentials, reauthenticate) => {
  return map(injectAuthCredentials(getAuthCredentials, reauthenticate), http);
}
