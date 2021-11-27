import httpService from './http';
import apiAuthorize from './apiAuthorize';



const api = ({
  options,
  apiKey,
  getAuthCredentials,
  reauthenticate,
  dispatch,
}) => {
  const rootUrl = options.domains.root;
  const apiUrl = options.domains.api;
  const http = httpService({ apiKey, });
  const authorizedHttp = apiAuthorize(http, getAuthCredentials, reauthenticate);

  const baseApi = {
    rootUrl,
    apiUrl,
    ...http,
    authorizedGet: authorizedHttp.get,
    authorizedPost: authorizedHttp.post,
    authorizedPut: authorizedHttp.put,
    authorizedPatch: authorizedHttp.patch,
    authorizedDelete: authorizedHttp.deleteRequest,
  };

  return {
    ...http,
    ...authorizedHttp,
  };
}

export default api;
