//EVENTS Handling
//the chnages in the state of an object


//onclick
// let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("btn1 was clicked");
//         let a=25;
//         a++;
//         console.log(a);
// }

// let div1=document.querySelector("#div1");
// div1.onmouseover=()=>{
//     console.log("inside a div");
// }


//EVENT OBJECT( through event object we can get info. about the event )
/*let btn1=document.querySelector("#btn1");

// btn1.onclick=(evt)=>{
//         console.log(evt);
//         console.log(evt.type);
//         console.log(evt.target);
//         // x and y are position
//         console.log(evt.clientX);
//         console.log(evt.clientY);
// }

    let div1=document.querySelector("#div1");

    // div1.onmouseover=(evt)=>{
        // console.log(evt);
        // console.log(evt.type);
        // console.log(evt.target);
        // // x and y are position
        // console.log(evt.clientX);
        // console.log(evt.clientY);
    // }


    // Event Listener
// addEventListener(event,callback) event jese se chalega toh phir callback(when a funct. pass as a parameter of another func. and will be called inside it )(function) chalega
   let btn2=document.querySelector("#btn2");

    btn2.addEventListener("click",()=>{
        console.log("button was clicked");
    });

    btn2.addEventListener("click",()=>{
        console.log("btn1 was clicked : handler2");
    });

    const handler3=()=>{
        console.log("btn1 was clicked : handler3");
    }

    btn2.addEventListener("click",handler3);

    btn2.addEventListener("click",()=>{
        console.log("btn1 was clicked : handler4");
    });


    //agr chahein toh event object ko bhi print krw ste inn listners ke through
    btn2.addEventListener("click",(evt)=>{
        console.log(evt);
        console.log(evt.type);
        console.log(evt.target);
        // x and y are position
        console.log(evt.clientX);
        console.log(evt.clientY);
    });

    // removeEventListener(event,function)
    btn2.removeEventListener("click",()=>{ // ismein remove nhi kiys event ko kyunki yeh jo function yahan pass kiya hai or jo upr hai heas=der 3 wala hain toh dono same to remove hona vhahiye tha lakin memroy mein dono alag alag hain
        console.log("btn1 was clicked : handler3");
    });
    // the callback refernece should be same 
    //to agr humain lgta hai ke koi aesa function johumain bd mein delete krwana par jae aesa lgta hai toh usse hum variable mein store krwa dete ahin 
    // iss tarha

    /*
     const handler3=()=>{
        console.log("btn1 was clicked : handler3");
    }

    btn2.addEventListener("click",handler3);
    

    btn2.removeEventListener("click",handler3);
*/


//  ------------- PRACTICE -----------------------

// create a toggle button that change the screen to dark-mode when clicked then chnage it to light when clicked again

// let modebtn=document.querySelector("#chng_mode");

// let currmode="light";
// modebtn.addEventListener("click",()=>{
//     console.log("you are trying to change mode");
//     if(currmode==="light"){
//         currmode="dark";
//         document.querySelector("body").style.backgroundColor="black";
//         document.querySelector("body").style.color="white";
//     }else{
//         currmode="light";
//         document.querySelector("body").style.backgroundColor="white";
//                 document.querySelector("body").style.color="black";

//     }

//     console.log(`${currmode} Current mode`);
// });


//we can do the chnage of  color using classes too

let modebtn=document.querySelector("#chng_mode");

let body=document.querySelector("body");
let currmode="light";
modebtn.addEventListener("click",()=>{
    console.log("you are trying to change mode");
    if(currmode==="light"){
        currmode="dark";
        body.classList.remove("light");
        body.classList.add("dark");
    }else{
        currmode="light";
        body.classList.remove("dark");
        body.classList.add("light");

    }

    console.log(`${currmode} Current mode`);
});


let div1=document.querySelector("#div");
 div1.addEventListener("mouseover",()=>{
    div1.style.backgroundColor="green";
  
 });
div1.addEventListener("mouseout",()=>{
    div1.style.backgroundColor="white";
  
 });

//----------RANDOM COLOR GENERATOR ------------

let div = document.querySelector("#div");

div.addEventListener("mouseover", () => {
  let randomColor = "#" +
    Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");

  div.style.backgroundColor = randomColor;
});





let box = document.querySelector("#div");

let size = 100;         // current size
let animationId = null; // store frame id

function grow() {
  if (size < 200) {
    size += 2;
    box.style.width = size + "px";
    box.style.height = size + "px";
    animationId = requestAnimationFrame(grow);
  }
}

function shrink() {
  if (size > 100) {
    size -= 2;
    box.style.width = size + "px";
    box.style.height = size + "px";
    animationId = requestAnimationFrame(shrink);
  }
}

box.addEventListener("mouseenter", () => {
  cancelAnimationFrame(animationId);
  grow();
});

box.addEventListener("mouseleave", () => {
  cancelAnimationFrame(animationId);
  shrink();
});