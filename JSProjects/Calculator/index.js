let inpbox= document.querySelector(".inpbox");
let buttons= document.querySelectorAll("button");

let str="";

for(let btn of buttons)
{
    btn.addEventListener("click",func);
}

function func(event)
{
    if(event.target.innerHTML === "AC")
    {
        str="";
        inpbox.value="";
    }
    else if(event.target.innerHTML=== "x")   //Backspace.
    {
        // str= str.slice(0, str.length-1);
        str= str.substring(0, str.length-1);
        inpbox.value= str;
    }
    else if(event.target.innerHTML === "=")
    {
        inpbox.value= eval(str);
    }
    else
    {
        let v= event.target.innerHTML;
        str+=v;
        inpbox.value=str;
    }
}

