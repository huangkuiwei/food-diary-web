import axios from 'axios';
import { message } from 'ant-design-vue';

const $http = axios.create({
  baseURL: process.env.VUE_APP_AXIOS_BASE_API_URL,
  timeout: 60000,
});

// 请求拦截
$http.interceptors.request.use((config) => {
  // token 加入请求头中
  const token = localStorage.getItem('dmzzToken');

  if (token) {
    !config.headers && (config.headers = {});
    config.headers.token = token;
  }

  return config;
});

$http.interceptors.response.use(
  (response) => {
    // code === 0 返回预期数据
    if (response.data.code === 0) {
      return Promise.resolve(response);
    }
    // 其它情况统一弹出后端返回的错误信息
    else {
      if (!response.config.hideErrorMessage) {
        message.error({
          content: response.data.Msg || response.data.msg || '接口异常，请联系管理员',
          key: response.data.Msg || response.data.msg || '接口异常，请联系管理员',
        });
      }

      // Code === -100 登录失效
      if (response.data.Code === -100) {
        localStorage.removeItem('dmzzUserInfo');
        localStorage.removeItem('dmzzToken');
      }

      return Promise.reject(response);
    }
  },
  (error) => {
    message.error({
      content: error.message,
      key: error.message,
    });

    return Promise.reject(error);
  },
);

export default $http;
