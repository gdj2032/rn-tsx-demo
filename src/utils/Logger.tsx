import { Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import RNFS from 'react-native-fs';

// init
const current = new Date();
const DATE = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}-${current.getHours()}-${current.getMinutes()}`;
const fileName = `log_app_${DATE}.txt`;
const logPath = Platform.select({
  android: `${RNFS.ExternalCachesDirectoryPath}/${fileName}`,
  ios: `${RNFS.DocumentDirectoryPath}/${fileName}`,
});

export default class Logger {
  static switch = ['off', 'on']
  static SOTREKEY = 'logAppSwitch'
  static defaultPath = logPath
  static title = ''

  static log(...args) {
    let [title, message] = args;
    if (message === undefined) { message = title; title = 'no title'; }
    if (this.title) { title = `${this.title} - ${title}`; }
    if (__DEV__) {
      if (args.length > 2) {
        console.warn('only support a title match a message , cant input more message ');
        return;
      }
      console.log(`%c${title}\n`, 'color:orange', message);
    }
    // eslint-disable-next-line no-unused-expressions
    Logger.logToFile(`[Log] - [${new Date().toJSON()}] -[ ${title} ] >>> ${JSON.stringify(message)}`);
  }

  static async setEnable(flag) {
    await AsyncStorage.setItem(Logger.SOTREKEY, Logger.switch[Number(flag)]);
    // protected
    this.enableFlag = flag;
  }
  static async getEnable() {
    if (this.enableFlag === undefined) {
      const flag = await AsyncStorage.getItem(Logger.SOTREKEY);
      this.enableFlag = __DEV__ || flag === Logger.switch[1];
    }
    return this.enableFlag;
  }

  static async logToFile(str: string) {
    if (await Logger.getEnable()) {
      RNFS.appendFile(Logger.defaultPath, `${str}\n`, 'utf8');
    }
  }

  constructor(name) {
    this.title = name;
  }

  log(...args) {
    Logger.log.apply(this, args);
  }
}
