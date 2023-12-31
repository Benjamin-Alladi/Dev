let fn= document.querySelector("#fullname");
let num= document.querySelector("#number");
let em= document.querySelector("#email");
let btn= document.querySelector(".btn");

fn.addEventListener("input", checkName);
num.addEventListener("input", checkMobile);
em.addEventListener("input", checkMail);

function checkName()
{
    let v= fn.value;
    let sp=  document.querySelector("#nameerror");
    
    if(!v.trim().includes(" ") || v.length<3)
    {
        sp.innerHTML= '<i id="red" class="fa fa-exclamation-circle"> Invalid Full Name</i>';
        // console.log(sp);
        return false;
    }

    else{
        sp.innerHTML= '<i id="green" class="fa fa-check"></i>';
        return true;
    }
}

function checkMobile()
{
    let v= num.value;
    let sp= document.querySelector("#numerror");
    if(!v.match(/^[0-9]{10}$/) || !v.length===10)
    {
        sp.innerHTML= '<i id="red" class="fa fa-exclamation-circle"> Invalid Mobile Number</i>';
        console.log(sp);
        return false;
    }

    else{
        sp.innerHTML= '<i id="green" class="fa fa-check"></i>';
        return true;
    }
}
function checkMail()
{
    let v= em.value;
    let sp= document.querySelector("#emailerror");
    let atPosition= v.indexOf("@");
    let dotPosition= v.lastIndexOf(".");
    if(v.includes(" ") || atPosition<1 || dotPosition<atPosition+2 || dotPosition+2>=email.length)
    {
        sp.innerHTML= '<i id="red" class="fa fa-exclamation-circle"> Invalid E-mail</i>';
        return false;
    }
    sp.innerHTML= '<i id="green" class="fa fa-check"></i>';
    return true;
}
function checkPassword()
{

}
function checkMessage()
{

}

function check()
{
    if(!checkName() || !checkMobile() || !checkMail() || !checkMessage())
    {
        return false;
    }
    else
    {
        return true;
    }
}