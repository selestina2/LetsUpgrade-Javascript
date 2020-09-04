//1. Program to search a particular character in a string

let str="Hello World, welcome to the universe";
let n=str.indexOf("l");
if (n==-1)
{
    console.log("Character is not available in String")
}
else 
console.log("character is available at index "+ n);

//2. Program to Convert minutes to seconds

let min=80;
let sec=min*60;
console.log("After converting min "+min+"m to Seconds Value is "+sec+"s");

//3.Program to search for a element in a array of strings
let strofArray=["laptop","Desktop","Mouse","Keyboard"];
let a = strofArray.indexOf("esktop");
if (a==-1)
{
    console.log("Element is not available in array of Strings")
}
else 
console.log("Element is available at index "+ a);

//5.Print an array in reverse order
    let strofArray1=["laptop","Desktop","Mouse","Keyboard"];
    for ( let i=strofArray1.length-1;i>=0 ;i--)
    {
        console.log(strofArray1[i]);
    }

//4.Program to display only elements containing 'a' in them from a array





    