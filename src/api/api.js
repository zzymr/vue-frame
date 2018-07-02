import axios from 'axios'
import cookie from 'js-cookie'
import toast from "../components/toast";
import dialog from "../components/dialog";
import apis from "./apis";
import '../styles/dialog/dialog.css';
import '../styles/toast/toast.css';

axios.interceptors.request.use(config => {
//  if (cookie.get('token')) {
//      config.headers.Authorization = decodeURIComponent(cookie.get('token'));
//  }
  return config;
}, err => {
  toast("请求超时,请检查网络后再试！");
  return Promise.resolve(err);
})

axios.interceptors.response.use(data => {

  if (data.status && data.status == 200 && data.data.status == 'error') {
    toast(data.data.msg);
    return;
  }
  // if (Number(data.data.code) == 402) { //粉丝去注册页
  //   window.location.href = apis.me_h5+'/#/wxbindPhone'; //这里应切换
  //   return
  // }
  if (data.data.code == 401) {
    checkToken()
    return
  }
  return data;
}, err => {
  if (err.response.status == 504 || err.response.status == 404) {
    toast('服务器被吃了⊙﹏⊙∥');
  } else if (err.response.status == 401) {
    checkToken()
  } else {
    toast('请检查网络情况或联系客服!');
  }
  return Promise.resolve(err);
})


function checkToken() {
  var isInWeChat = /(micromessenger|webbrowser)/.test(navigator.userAgent.toLocaleLowerCase());
  if (isInWeChat) {
    return
  }

  cookie.remove("token")

  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isAndroid) {
    sanzhuliang.onLoginPressed();
  }
  if (isiOS) {
    window.location.href = 'sanzhuliang://app/me/login';
  }

}


export const postRequest = (url, baseURL, params) => {
  return axios({
    method: 'post',
    baseURL: `${baseURL}`,
    url: `${url}`,
    data: params,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Methods": "POST,GET",
    }
  });
}

export const putRequest = (url, baseURL, params) => {
  return axios({
    method: 'put',
    baseURL: `${baseURL}`,
    url: `${url}`,
    data: params,
    timeout: 30000,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',

    }
  });
}

export const deleteRequest = (url, baseURL, params) => {
  return axios({
    method: 'delete',
    baseURL: `${baseURL}`,
    url: `${url}`,
    data: params,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',

    }
  });
}

export const getRequest = (url, baseURL, params) => {
  return axios({
    method: 'get',
    baseURL: `${baseURL}`,
    url: `${url}`,
    params,
    timeout: 30000,
    headers: {}
  });
}
