import curry from 'lodash/curry';
import flow from 'lodash/flow';
import curryRight from 'lodash/curryRight';

const whiteSpace = ' ';
const uppercase = (str: string) => str.toUpperCase();
const important = (str: string) => `${str}!`;
const split = (str: string, splitter: string) => str.split(splitter);
const words = curryRight(split)(whiteSpace);
const mapStrArr = (functor: (str: string) => string, arr: string[]) =>
  arr.map(functor);
const mapStrArrCurry = curry(mapStrArr)(flow(uppercase, important));

export const splitToShout = flow(words, mapStrArrCurry);
