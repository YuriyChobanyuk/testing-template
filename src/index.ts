import _ from 'lodash';
import { List } from 'immutable';

export const splitToShout = (base: string): List<string> => {
  const whiteSpace = ' ';
  const important = (str: string) => `${str}!`;

  return _(base)
    .chain()
    .upperCase()
    .split(whiteSpace)
    .map(important)
    .reduce((acc: List<string>, item: string) => acc.push(item), List())
    .value();
};
