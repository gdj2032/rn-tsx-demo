import { Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');
const designWidth = 750 / 2;
const designHeight = 1334 / 2;
export const deviceWidth = dimensions.width;
export const deviceHeight = dimensions.height;

export const scale = Math.min(
  deviceHeight / designHeight,
  deviceWidth / designWidth,
);

function assignValueToDirection(
  top: any,
  right = top,
  bottom = top,
  left = right,
  property: any,
) {
  const styles: any = {};
  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;
  return styles;
}

export const mixins = {
  margin: (top: any, right: any, bottom: any, left: any) =>
    assignValueToDirection(top, right, bottom, left, 'margin'),
  padding: (top: any, right: any, bottom: any, left: any) =>
    assignValueToDirection(top, right, bottom, left, 'padding'),
  fontSize: (size: any) => size * scale,
  zoom: (size: any) => size * scale,
};
