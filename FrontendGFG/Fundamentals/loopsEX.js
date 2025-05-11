//*
//* *
//* * *
//* * * *
//* * * * * 

for(let i=0;i<5;i++)
{
    let str='';
    for(let j=0;j<i+1;j++)
    {
         str+='* ';
    }
    console.log(str);
}

//other way
let str="* "
for(let i=0;i<6;i++)
{
    console.log(str.repeat(i));
}




//reverse
let str1="* "
for(let i=4;i>0;i--)
{
    console.log(str1.repeat(i));
}




//length of the string
let userName="sivasree annamdevula";
console.log(userName.length);
let count=0;
for(let i=0;i<userName.length;i++)
{
   count++;
}
console.log(count);




//no.of vowels in a string
let user="doIHaveVowels";
let vowels="aeiouAEIOU"
for(let i=0;i<user.length;i++)
{
    if(vowels.includes(user[i]))
    {
        console.log(`${user[i]} is a vowel`);
    }
}