const readline=require("readline-sync");

const number=Number(readline.question("Enter any number"));

const rem3=number % 3;
const rem5=number % 5;
const rem7=number % 7;

if(rem3 === 0 && rem5==0)
{
    console.log("divisible by 3 & 5");
}
else if(rem7 ==0 || rem3===0)
{
    console.log("divisible by 7");
}
else
{
    console.log("not divisible by 3,5,7 ");
}






//vs
if(rem3 === 0 && rem5===0)
    {
        console.log("divisible by 3 & 5");
    }
 if(rem7 ===0 || rem3===0)
    {
        console.log("divisible by 7");
    }
    if(rem7 === 0)
    {
        console.log("not divisible by 3,5,7 ");
    }
    else{

    }
    








    //NESTED CONDITIONS
    if(true)
    {
        if(false)
        {

        }
        else{

        }
    }
    else{
        if(true)
        {

        }
        else{
            
        }
    }