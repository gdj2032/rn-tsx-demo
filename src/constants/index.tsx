import { version } from '../../package.json'

// const API_HOST = 'http://192.168.1.129:3721';
// const API_HOST = 'http://192.168.31.178:3721';
// const API_HOST = 'http://192.168.0.104:3721';
const API_HOST = 'http://192.168.1.170:8800/api';
// const API_HOST = 'http://192.168.1.99:8951';


const Credentials = 'include'; // include 跨域使用 、 same-origin 同源使用

export { API_HOST, Credentials };

export const HEADER_HEIGHT = 44;

export const APP_VERSION = version;

export const APP_NAME = 'rnTsxDemo';
