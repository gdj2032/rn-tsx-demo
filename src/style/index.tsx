export { default as themes } from './themes';
import color from './themes';
export { mixins, scale, deviceHeight, deviceWidth } from './mixins';

export const layoutStyles = {
  fullContainer: {
    flex: 1,
  },
  centralContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blackContainer:{
    flex: 1,
    backgroundColor: color.color.pageBackgroundColor,
  },
};
