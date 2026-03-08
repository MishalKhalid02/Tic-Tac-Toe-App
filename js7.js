// // alert("HELLO,THIS IS ALERT! ");

// // // Dynamic changes keliye DOM use kr rahe hain
// // console.dir(document.body);//dipaly object
// // console.log(document.body);//display the tags that are in body
// // document.body.style.background="Yellow";
// // //document.body.childNodes[1].innerText="GREEN";
// // //       ------ Heading chnage kari 


// // //DOM manipulation 

// // //elements ko access krne ka tareeqa
// // //Selecting with id
// // let heading=document.getElementById("heading"); //yeh heading ki value ko print karega
// // console.log(heading);

// // //Selecting with class
// // let classheadings=document.getElementsByClassName("heading-1");
// // console.log(classheadings);

// // //Selecting with tag  (kisis bhi tag ko krwa skte hain yahan p ko karway hai )
// // let paragraphs=document.getElementsByTagName("p");

// // //better way to acess the elemets is QUERY SELECTOR

// // //returns first element of whatever the tag we are asking for
// // // using tags
// // let elements=document.querySelector("p");
// // console.log(elements);
// // //using class
// // let elementsclass=document.querySelector(".heading-1");
// // console.log(elementsclass);
// // //id
// // let elementsid=document.querySelector("#heading");
// // console.log(elementsid);

// // //returns a NodeLIst
// // let Allelements=document.querySelectorAll("p");
// // console.log(Allelements);
// // //using class
// // let Allelementsclass=document.querySelector(".heading-1");
// // console.log(Allelementsclass);


// //get and set dono krskte hai inn properties ko 
// // console.log(Allelementsclass.tagName);
// // console.log(Allelementsclass.innerHTML);
// // console.log(Allelementsclass.textContent);
// let mydiv=document.querySelector("div");
// console.dir(mydiv);
// console.log(mydiv.innerText);
// console.log(mydiv.innerHTML);
// let div=mydiv.innerText="hello"; //in thiss there was list of fruits i changed the whole list and print hello 
// console.log(div.innerText);

// let head=document.querySelector("#heading");//getting value the way we use getter
// head.innerText="HELLLLO";// change the value the way we use setter to set or change the value
// console.log(head.innerText);
// head.innerHTML="<h3>HI</h3>";
// head.innerHTML="<i>HI</i>";
// // agr style mein uski visibility hidden ki hoi hai to usko hum
// // textcontent property ke through dekh skte hain 
// console.log(head.textContent);


// //DOM TREE
// //parent ,child,sibling
// //NODES:
// //     -Text node
// //     -Comment Nodes
// //     -Elements Nodes (our main focus we ignore above two)
// // console.log(document.body.firstChild);
// // console.log(document.body.firstChild.nodeName);
// // console.log(document.body.lastChild);
// // console.log(document.querySelector("div").children);



// ///PRACTICE

// let h2=document.querySelector("#h2");
// // let h2_1=innerText=" from Apna college students";
// // console.log(h2.append(h2_1));

// //or
// h2.innerText=h2.innerText+" from apna college students";
// console.log(h2.innertext);

// let divs=document.querySelectorAll(".box");
// console.log(divs);
// divs[0].innerText="Apple";
// divs[1].innerText="MAngo";
// divs[2].innerText="new value";


// //better way

// let idx=1;
// for(div of divs){
//     div.innerText=`new unique value ${idx}`; 
//     console.log(div);
//         console.log(div.innerText);
//         idx++;

// }


//Atributes 
// jese tag ke attributes hote hain agr div h1 ya p mein koi id ya class ame add  kya toh woh attribute img mein src attribute

//getAttribute(attr)
// let div =document.querySelector("div");
// console.log(div);

// let val=div.getAttribute("id");
// console.log(val);

// let name=div.getAttribute("name");
// console.log(name);

// can do the above on any tag not only is for div

//setattribute(attr,value);

// console.log(div.setAttribute("id","newid"));

//Style

//node.style
// console.log(div.style);
// div.style.backgroundColor="yellow";




// //create element (here i use button but can add any element using same way)
// let newbtn=document.createElement("button");
// newbtn.innertext="click...";
// console.log(newbtn.innerText);

// //insert element in DOM tree
// //node.append(el) ----> adds at the end of node(inside)
// let div =document.querySelector("div");

// div.append(newbtn);

// //node.prepend(el) ----> adds at the start of node(inside)
// div.prepend(newbtn);
// //node.before(el) ----> adds before the node(outside)
// div.before(newbtn);

// //node.after(el) ----> adds after the node(outside)
// div.after(newbtn);


// let newheading=document.createElement("h1");
// newheading.innerHTML="<i>hello, i am learning DOM</i>";


// //kahan pr add krna hia usko access krke prepend krdiya
// document.querySelector("body").prepend(newheading);
// //DELETE ELEMENT

// //node.remove() -------> removes 
// let para=document.querySelector("p");
// para.remove();


// //Homework
// //appendChild()

// // parent.appendChild(child);

// // parent → existing DOM element

// // child → node you want to insert

// let parentdiv=document.querySelector("div");

// let newpara=document.createElement("p");
// newpara.innerText="hello,this is a new child";

// parentdiv.appendChild(newpara);

// //removeChild()
// let parent = document.querySelector("div");
// let child = document.querySelector("p");

// parent.removeChild(child);
// //or
// child.remove();

//PRACTICE:

// let newbtn=document.createElement("button");
// newbtn.innerText="Click Me";
// newbtn.style.backgroundColor="red";
// newbtn.style.color="white";
// document.querySelector("body").prepend(newbtn);


// //q2
// //ek element ko do classes mileine append two clasess
// let para=document.querySelector("P");

// // console.log(para.getAttribute("class")); // yeh class ka name le kr aya jo ke paragraph tha

// // para.setAttribute("class","newclass"); // isse yeh now ke usne previous class ko overwrite krdiya jo pehle paragraph thi usko 

// //toh overwrite na ho uske liye hum classlist use krte hain

// console.log(para.classList); //list of classses
// para.classList.add("newclass");// idhr simply jo newclass css.style mein banai thi usko add krdiya para ki class jo ke paragraph thi uske sath ab jb class list dekheinge toh 2 classes aeingi ek paragraph or ek newclass