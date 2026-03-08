/*//LOOPS and STRINGS
for(let i=0;i<5;i++){
    console.log("For LOOP",i);
}

let i=1;
while(i<=5){
    console.log("While Loop",i);
    i++;
}

let a=1;
do{
    console.log("Do While Loop",a);
    a++;
}while(a<=10);

//FOR OF loops
// agr yeh string hai "mishal" to yeh loop ek ek character print karega

let str="MISHAL";
for(let val of str){
    console.log(val);
}

//FOR IN loop 
//it is used for objects and object have keys 
//it returns the keys of the objects

let product={
    pName:"ball pen",
    pRating:4,
    pPrice: 120,
    offer: "5%"
};

for(let key in product){
    console.log("key: ",key,"value: ",product[key]);
}

//RAndom Game Number

let gamenumber =3;
let Usernum=prompt("GUess the game number: ");

while(Usernum!=gamenumber){
    Usernum=prompt("You entered wrong game number, Guess again: ");

}
console.log("COngratulationS ");



//strings
let str1 ="       hi  mishal      ";
let str2='hello';

//inbuilt properties
console.log(str1.length);

//String indices
    console.log(str2[0]);
    console.log(str2[4]);

//template literals
let specialStirng=`this is a template literal ${1+2+3}`;//yahan pehel values add hongi phir woh string ka part ban jaeingi
console.log(specialStirng);
console.log(typeof(specialStirng));

//Example: to understand why we are using template literal
let obj={
    item: "pen",
    price: 10
}

console.log("the cost of", obj.item,"is",obj.price,"pkr");

//string interpolation is to create a string by doing substitution of placeholders
let output= `the cost of ${obj.item} is ${obj.price} pkr`
console.log (output);

//escape character
//  \n for new line 
//  \t for tab space

//inbuilt Methods
//toUpperCase()
//toLoweCase()
//trim()   ---- remove whitespaces
//slice(start,end?) ---end mein jo value hogi woh not included hoti hai
//concat
//replace --- to serach value in string (it search the value and then add new value)
//charAt -- kisi bhi index ka char return krna hota hai toh

let newstr= str1.toUpperCase();
// if i write this alone str1.toUpperCase(); 
// it'll not convert it because In JS we can not manipulate the actual string (strings are immutable)
// it'll return new result so storing the result in new value
console.log(newstr);

let newstr1= str1.toLowerCase();
let newstr2= str1.trim();

console.log(newstr1);
console.log(newstr2);

let slice1="mishal khalid";
console.log(slice1.slice(0,10)); //end index na bhi add karo toh bhi woh starting index se end tk return karega

let result2=str1.concat(str2); // simply add btoh strings str1+str2
console.log(result2);

result2=str1.replace("m","M");
result2=str1.replace("mishal","DUA");
// agr hellololo hai or replace lo krna hai p se toh sirf ek br lo find hone pr usse replace hoga return karega helplolo
result2=str1.replaceAll("mishal","DUA");
//replaceall se sari hojaeingi
console.log(result2);

result2=str2.charAt(3);
console.log(result2);



let fullname=prompt("Enter FullName ");
let lengthUser=fullname.length;
let username="@"+fullname.concat(lengthUser);
console.log(username);
*/