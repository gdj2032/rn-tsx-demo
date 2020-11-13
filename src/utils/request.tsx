import { API_HOST, Credentials } from '../constants';
import { genQuery, abortablePromise } from './helper';
import Logger from './Logger';

const methods = ['GET', 'POST', 'PUT', 'DELETE'];

async function checkStatus(this: any, response: any) {
  switch (response.status) {
    case 200:
      this.logout = false;
      return response
        .text()
        .then((text: any) => Promise.resolve(text ? JSON.parse(text) : {}));
    default:
      const res = await response.text().then((text: any) => text ? JSON.parse(text) : {});
      Logger.log(`请求失败: `, res)
      return Promise.resolve({ err: '请求失败', ...res, url: response.url });
  }
}

async function fetchRequest(options: any) {
  // const state = await NetInfo.fetch();
  // Logger.log("fetchRequest Connection type", state.type);
  // Logger.log("fetchRequest Is connected?", state.isConnected);
  // if (!state.isConnected) {
  //   Toast.show({ message: '未连接网络' })
  //   return;
  // }
  Logger.log('请求路径 path: ', options.path);
  if (!options.method || methods.indexOf(options.method) === -1) {
    console.error('请求类型错误');
    return;
  }

  const host = API_HOST;

  const requestUrl = `${options.url || host}${options.path}${genQuery(
    options.query,
  )}`;

  const config = {
    method: options.method,
    credentials: options.credentials || Credentials,
    headers: options.headers,
    body: '',
  };

  // application/json
  if (
    options.headers &&
    options.headers['Content-Type'] === 'application/json'
  ) {
    config.body = JSON.stringify(options.data);
  }

  // application/x-www-form-urlencoded
  if (
    options.headers &&
    options.headers['Content-Type'] === 'application/x-www-form-urlencoded'
  ) {
    const searchParams = Object.keys(options.data)
      .map(key => {
        return `${encodeURIComponent(key)}=${encodeURIComponent(
          options.data[key],
        )}`;
      })
      .join('&');
    config.body = searchParams;
  }

  // upload file
  if (options.upload) {
    if (options.data instanceof FormData) {
      config.body = options.data;
    } else {
      console.error('上传服务中，data必须是FormData');
      return;
    }
  }

  return abortablePromise(fetch(requestUrl, config)).then(response =>
    checkStatus(response),
  )
    .catch((err) => {
      Logger.log("网络请求 err: ", err);
    });
}

const request = {
  get: (opts: any) => {
    return fetchRequest({
      method: 'GET',
      headers: { Accept: 'application/json' },
      ...opts,
    });
  },
  post: (opts: any) => {
    return fetchRequest({
      ...opts,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  },
  postForm: (opts: any) => {
    return fetchRequest({
      ...opts,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  delete: (opts: any) => {
    return fetchRequest({
      ...opts,
      method: 'DELETE',
      headers: { Accept: 'application/json' },
    });
  },
  put: (opts: any) => {
    return fetchRequest({
      ...opts,
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  },
  upload: (opts: any) => {
    return fetchRequest({
      ...opts,
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      upload: true,
    });
  },
};

export default request;
