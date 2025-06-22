console.log("hiii");
/*
function myFunction(){
    console.log("first function");
}
myFunction();

function myFunction(msg) //parameter->input
{
    console.log(msg);
}
myFunction("i love js");//argument

*/
// function 2 numb sum
/*
function sum(a,b){
    console.log(a+b);
}
//arrow function
const arrowsum=(a,b)=>{
    console.log(a+b);
}

const mul=(x,y)=>{
    console.log(x*y);
}

const printhi=()=>{console.log("helooo");}
*/

/*prac q

function countvowels(str){
  let count =0;
  for(const char of str){
    if(char==="a" ||char==="e" ||char==="i" ||char==="o" ||char==="u"){
        count++;
    }
  }
   return count;
}


const arrowvowel=(str)=>{
    let count=0;
    for(const char of str)
    {
        if(char==="a" ||char==="e" ||char==="i" ||char==="o" ||char==="u"){
            count++;
        }
      }
       return count;
    }
*/
  //for each loop
/*
let arr=[1,2,3,4,5];

arr.forEach(function printval(val)   //value at each index
{
  console.log(val);
});

arr.forEach((val)=>{
    console.log(val);
})
*/
/*

let city=["pune","delhi"];

city.forEach((val,idx,city)=>{
    console.log(val.toUpperCase(),idx,city);
})

//practice q::::::  for given array of numbers print the square of each value using forEach loop..

let arr=[1,2,3,4];

arr.forEach((arr)=>{
    console.log(arr**2);//(arr*arr);
})

// another way to cll callback functins
let calsquare=arr=>{
    console.log(arr*arr);
};

arr.forEach(calsquare);//1,4,9,16

//map 

let newarr=arr.map((val)=>{
    return val*2;
});

console.log(newarr);//[2,4,6,8]


//filter

const evenarr=arr.filter((val)=>{
    return val % 2===0;
});

console.log(evenarr);//[2,4]

//reduce

const output=arr.reduce((res,curr)=>{
     return res+curr;
}
);

console.log(output);//10

//print largest number in an array

const largest=arr.reduce((pre,curr)=>{
    return pre>curr? pre:curr;
})
console.log(largest);
*/

//practice q

//array of marks of students.filter our of the marks of students that scored 90

let marks=[67,78,54,96,45,90];

let stud=marks.filter((val)=>{
    return val>=90;
}
)
console.log(stud);

//take a number n as input from user. create an array of numbers from 1 to n.
// use  the reduce method to calculate sum of all numbers in the array.
//use the reduce method to calculate product of all numbers in the array  means factorial of numbers

let n=prompt("enter a number :");
let arr=[];
for(let i=1;i<=n;i++)
{
    arr[i-1]=i;//1[0],2[1],3[2] thats why use i-1
}
console.log(arr);

let sum =arr.reduce((res,curr)=>{
    return res+curr;
})
 console.log(sum);

 let product=arr.reduce((res,curr)=>
 {
    return res*curr;
 })
 console.log(product);
















