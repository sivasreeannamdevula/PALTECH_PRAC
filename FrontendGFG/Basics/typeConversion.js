const a="3"
const b="10"
//as a,b are strings they are concatenated
console.log(a+b);

//string to Number conversion
const c=Number(a);
const d=Number(b);
console.log(c+d);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

//if we try to convert any alphabetical string to number we get NaN
console.log(Number("siva"));
//empty string we get 0
console.log(Number(""));

//number to string conversion
const e=3;
const f=String(e)
console.log(typeof f);



//string to boolean conversion----any string other than empty is true and empty string is false
console.log(Boolean("siva"));
console.log(Boolean(""));



//number to Boolean conversion----any number other than 0 is true and 0=false
console.log(Boolean(9));
console.log(Boolean(0));
console.log(Boolean(-8));