import axios from "axios";

const { VITE_CLIENT_ID, VITE_SECRET, VITE_BASE_URL } = import.meta.env;

const _createAxiosInterceptor = (url) => {
  let headers = {};
  const axiosCreate = axios.create({
    baseURL: url,
    withCredentials: true,
    headers: headers,
    auth: {
      username: VITE_CLIENT_ID,
      password: VITE_SECRET
    },
  });

  axiosCreate.interceptors.response.use(
    (response) => {
      console.log("Response: ", response);
      if (response.status === 401) {
        localStorage.clear();
        window.location = '/logout';
      }
      return response;
    },
    (error) => {
      var requestUrl = error.request.responseURL;
      if (error.response.status == 401 && !requestUrl.endsWith('/auth/login')) {
        localStorage.clear();
        window.location.replace("/logout");
      }
      return Promise.reject(error);
    }
  );

  return axiosCreate;
};

const BaseService = _createAxiosInterceptor(VITE_BASE_URL);

export default BaseService;
