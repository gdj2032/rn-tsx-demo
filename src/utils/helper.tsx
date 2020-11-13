import { Toast } from '../components';
import { TOAST_TYPE } from '../constants';
import i18n from '../i18'

const noop = () => {};

function genQuery(params) {
  if (!params) {
    return '';
  }
  let index = 0;
  let query = '';
  Object.keys(params).forEach(name => {
    if (params[name] !== undefined && params[name] !== null) {
      query += index === 0 ? '?' : '&';
      const value = params[name];
      query += `${name}=${encodeURIComponent(value)}`;
      index += 1;
    }
  });
  return query;
}

/**
 * 允许超时中止的Promise
 * @param {Promise} basePromise
 * @param {number} timeout
 */
const abortablePromise = (basePromise, timeout = 5000) => {
  let abortFunc;

  const abortPromise = new Promise((_, reject) => {
    abortFunc = () => {
      reject('request timeout');
    };
  });

  const newPromise = Promise.race([basePromise, abortPromise]);

  setTimeout(() => {
    abortFunc();
  }, timeout);

  return newPromise;
};

const getSocketUrl = (roomData = {}) => {
  const { meetingCode, name, peerId, reason, ssl, serverIp } = roomData;
  if (!peerId || !meetingCode) {
    Toast.show({ message: i18n.t('INVALID_MEET_CODE'), type: TOAST_TYPE.ERROR });
    return null;
  }
  let url = `${ssl ? 'wws' : 'ws'}://${serverIp}?peerId=${encodeURIComponent(peerId)}&meetingCode=${encodeURIComponent(meetingCode)}&name=${encodeURIComponent(name)}`;
  if (reason) {
    url = `${url}&reason=${encodeURIComponent(reason)}`;
  }
  return url;
};

export {
  noop,
  genQuery,
  abortablePromise,
  getSocketUrl,
};
