import { compose, pipe } from 'lodash/fp';

//trim
const trim = str => str.trim();
//wrap in div
const wrap = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

//lodash Functional Programming Helpers
//compose, pipe

//compose must be used in the order that the functions wrap
// const transform = compose(wrap, toLowerCase, trim);

//pipe will read in the order that the functions will be called
const transform2 = pipe(trim, toLowerCase, wrap('div'));
console.log(transform2('javascript'));

//original wrapping of functions
// const result = wrapInDiv(toLowerCase(trim(input)));
