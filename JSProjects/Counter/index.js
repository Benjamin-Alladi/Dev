let ibtn= document.getElementById("incbtn");
let dbtn= document.getElementById("decbtn");
let ele= document.getElementById("countvalue");
let clearbtn= document.getElementById("clear");

let ibox= document.getElementById("incbox");
let dbox= document.getElementById("decbox");


// EventListeners:
ibtn.addEventListener("click", increment);
dbtn.addEventListener("click", decrement);

function increment()
{
    let val= ele.innerHTML;
    val= parseInt(val);
    val=val+1;
    console.log(val, typeof val);
    ele.innerHTML=val;
};

function decrement()
{
    ele.innerHTML= parseInt(ele.innerHTML)-1;
};



// clear:
clearbtn.addEventListener("click", clr);

function clr()
{
    ele.innerHTML=0;
};


// Increment By Value Function:
function incfunc()
{
    let val= ibox.innerHTML;

    if(val==="")
    {
        alert("Enter any value to Increment Counter");
    }
    else
    {
        ele.innerHTML= parseInt(ele.innerHTML)+ parseInt(val);
        ibox.innerHTML="";
    }
};


// Decrement By Value Function:
function decfunc()
{
    let val= dbox.innerHTML;

    if(val==="")
    {
        alert("Enter any value to Decrement Counter");
    }
    else
    {
        ele.innerHTML= parseInt(ele.innerHTML)- parseInt(val);
        dbox.innerHTML="";
    }
};