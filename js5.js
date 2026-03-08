// //--------------- Functions -------------
// function myfunc(msg){
//     console.log("Hello!");
//     console.log("My name is Mishal!");
//     console.log(msg);

// }

// myfunc("Hi");

// function sum(a,b){
//     console.log(a+b);
// }

// sum(2,3);

// function sumWithReturn(a,b){
//     sum=a+b;
//     return sum;
// }

// let val=sumWithReturn(4,5);
// console.log(val);

// //Arrow function (Compact func{chota way to erite function})
// const arrowSum=(a,b)=>{
//     console.log(a+b);
// }
// //arrowSum is a variable jismein arrow function hai 
// arrowSum(2,9);

// const ReturnarrowSum=(a,b)=>{
//     return a+b;
// }

// let result=ReturnarrowSum(2,5);
// console.log(result);

// //More shorter way(but we don't prefer this way)
// // const ShortArrowSum=(a,b)=>a+b; //no need to erite return keyword this will directly return Sum

// function countVowels(str){
//     let count=0;
//     for(let char of str){
//         if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("abcde"));

// //--------- using arrow function

// const arrowCountVowels=(str)=>{
//     let count=0;
//     for(let char of str){
//         if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(arrowCountVowels("aaaaa"));


// function abc(){
//     console.log("hello!");
// }

// function print(abc){
//     return abc;

// }

// //-----------   IT IS A HIGHER ORDER FUNCTION / METHOD (they either take another funcc. as there parameter or return it)

// // forEach Method for loop in Array  (only be used for arrays)
// //CallbackFucntion is a func. passed as an argument to another function

// console.log("FOREACH MEthod")
// let arr =[1,2,3,5];
//  //              callBackFunction
// arr.forEach(function printvalue(val) { //value at each index (val)
//     console.log(val);
// });

// //using arrow function hum upr wale ko implement krte hain

// arr.forEach((val)=>{
//     console.log(val);
// });

// let arr1 =["i","me","they"];

// arr1.forEach((val)=>{
//     console.log(val.toUpperCase());
// });

// //in callBackFunction we can pass three arguments either val,index,and the array itself or all 


// arr1.forEach((val,idx,arr1)=>{
//     console.log(val.toUpperCase(),idx,arr1);
// });

// //SQuare

// arr.forEach((val)=> { //value at each index (val)
//     console.log(val*val);
// });

// // OR
// let callsquare=(val)=>{
//     console.log(val*val);
// }

// arr.forEach(callsquare);


// //--------- MAP ----------
// //similar to foreach but map creates new array to return the values 
// // we generally don't use indx and array in both map and for each

// arr.map((val)=>{
//     console.log(val);
// });

// //return val which we are storig in newArray
// let newArray= arr.map((val)=>{
//     return val*3;
// });

//     console.log(newArray);


// //-------- Filter --------
// // store in new array that are true as per the condition
// // filter all even numbers

// let newArr= arr.filter((val)=>{
//     return val %2==0
// });

// console.log(newArr);

// // ----------- Reduce ----------
// // koi bhi operation perform krne ke bd ek single value return krni ho toh (e.g: average, sum etc)

// const output=arr.reduce((prev,curr)=>{
//     return prev+curr;
// });
// //arr={1,2,3,5} iske start mein  res=1 and curr=2 hoga phir 
// // values add hongi dono or uska answer res mein hi store hoga 
// //then res=3 and curr=3 now after addition res=6 and 
// // then res=6 and curr=5 and then the final result 
// // that is going to return is 11 and that'll be stored in output 
// // that's how it return single value
// console.log(output);


// // find MAx elemnt 

// const outputMAX=arr.reduce((prev,curr)=>{
//     return prev>curr ? prev:curr;
// });

// console.log(outputMAX);


// --------------- Practice --------------

// -------- filter out marks that are 90+

// we cannot take array as an input using prompt directly but can take as string and then split

// let input=prompt("enter number separated by comma")

// let arr=input.split(",");

// console.log(arr);

// let output=arr.filter((val)=>{
//     return val>90;
// });

// console.log(output);

// crete array and then using reduce find sum and factorial

// let n=prompt("enter number ");

// let arr=[];

// for(let i=1;i<n;i++){
//     arr[i-1]=i;
// }

// console.log(arr);

// let sum=arr.reduce((prev,curr)=>{
//     return prev+curr;
// });

// console.log(sum);

// let factorial=arr.reduce((prev,curr)=>{
//     return prev*curr;
// });

// console.log(factorial);