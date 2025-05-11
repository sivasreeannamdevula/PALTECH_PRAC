try
{
   console.log(myname);
}
catch(error)
{
    console.log(error.message);
    console.log(error.name);
    console.log(error.stack);
}
finally
{
    console.log("finally always executes");
}