
//SHORT CIRCUTING(returning truthy and falsy based on OR AND)
// &&  AND  returns first falsy value else last truthy value
// ||  OR   returns first truthy value else last falsy value
//  !  NOT
//  ?? NULLISH COALEASCING


//truthy and falsy values("",0,null,undefined)
//if Boolean of any value is false then it is falsy value else it is truthy value
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));



const firstName=""
const lastName=""
//if firstName and lastName are falsy values then tempName gets assigned to userName else  first truthy or last falsy gets assigned
const userName=firstName || lastName || "tempName";
console.log(userName);


const a=89;
let b;
//if b is falsy value then return 0
console.log(a + (b || 0));


//AND
const aa=9;
const bb=0;
//returns bb=0 as it is first falsy value, if bb is not falsy value then it returns last truthy value
console.log(aa && bb);






//NULLISH COALESCING VALUE
//if null/undefined then returns the other value
console.log(null ?? "sree");
console.log(undefined ?? "sere");
console.log("" ?? "srss");
console.log(0 ?? 3);



