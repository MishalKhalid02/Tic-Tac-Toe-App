// //ARRAY (related info should be stored in arrays)
// let marks=[10,20,34,56,78];//array can store different data types together
// console.log(marks);
// console.log(marks.length);
// let cities=["karachi","lahore","islamabad"];
// //change the value from specific index strings mein specific position pr chnage nhi kr skte strings are immutable
// marks[2]=66;

// //looping over array

// for(let i=0;i<marks.length;i++){
//     console.log(marks[i]);
// }

// //for array we use for-of loop rather than 
// // simple for(agr specifically kisi index pr chnage krna ho toh use karein)
// // lakin agr for of ke through krna hotoh index by indexx
// let items=[200,300,455,3222];

// let indx=0;

// for(let item of items){
//     console.log(`value of index ${indx} = ${item}`);
//     indx++;
// }

// // can use either
// for(let i=0;i<items.length;i++){
//     console.log(items[i]);
// }
// //  or for in 

// for(let mark of marks){
//     console.log(mark);
// }
// for(let city of cities){
//     console.log(city.toUpperCase());
// }

// //Array Methods

// //push()---- add to end 
// //pop()---- delete from end and return
// //toString()---- convert array to string
// //concat() 
// //unshift()-- add tostart
// //shift() --delete from start and return
// //slice() --return a piece of the array -- slice(startidx,endidx)
// //splice() -- change original array(add, remove , replace)  --splice(startidx,delCount{matlb kitne element delete krne hain},newelement1{agr koi new add krne hain toh yahan likheinge or yeh starting idx ke bd add hoga or likheinge el1,el2,el3...})
// cities.push("Hyderabad");
// cities.push("Faisalabad","Shorkot");
// cities.unshift("Faisalabad","Shorkot");

// for(let city of cities){
//     console.log(city.toUpperCase());
// }

// let deleteditem=cities.pop();
// let deleteditemStart=cities.shift();
// console.log(`the deleted item was ${deleteditem}`);
// console.log(`the deleted item was ${deleteditemStart}`);

// for(let city of cities){
//     console.log(city);
// }

// //will convert in strings (original array ko cange nhi krta)
// console.log(cities.toString());

// //can concat multiple arrays too
// let a=['1','2','3','20','30'];
// let b=['4','5','6'];
// let c=['7','8','9'];

// let final=a.concat(b,c);
// //let slice=a.slice(0,1);

// //console.log(a.slice(0,2));
// let splicefinal=a.splice(2,2,4,5);
// console.log(splicefinal);
// console.log(a);

// //Add Element
// // a.splice(2,0,102);

// // //Delete Elemnet
// // a.splice(2,0);

// // //Replace Element
// // a.splice(2,1,102);

// //if,splice mein ek element pass karein toh yeh usse index se agge ke sare elements ko delete krdega
// // a.splice(2);
// */