let wrapper= document.querySelector(".wrapper");
let inpbox= document.getElementById("inpbox");

function genPara()
{
    let ele= document.createElement("p");
    ele.classList.add("pg");
    console.log(ele.className);
    let c= document.createTextNode("Hi");
    ele.append(c);
    wrapper.append(ele);
}