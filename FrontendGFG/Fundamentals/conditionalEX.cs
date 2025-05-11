const readlinesync=require("readline-sync")

const string1=readlinesync.question("enter the string1")
const string2=readlinesync.question("enter the string2")
const string3=readlinesync.question("enter the string3")

console.log(string1.length);
if(string1.length < string2.length)
{
    if(string1.length < string3.length)
    {
        console.log(`${string1} is smallest`);
    }
    else{
        console.log(`${string3} is smallest`);
    }
}
else
{
    if(string2.length<string3.length)
    {
     console.log(`${string2} is smallest`);
    }
    else
    {
        console.log(`${string3} is smallest`);
    }
}