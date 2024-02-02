import { privateService, publicService } from './axiosConfig.js';

privateService.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

publicService.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    // if(statusCode에 따라서){
    //     동작할 것을 미리 셋팅
    // }
    // if (error.response.status === 400) {
    //   alert(error.response.data.message);
    // } else if (error.response.status === 409) {
    //   alert(error.response.data.message);
    // }
    return Promise.reject(error);
  },
);
