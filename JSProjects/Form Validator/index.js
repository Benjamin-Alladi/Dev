let fn= document.querySelector("#fullname");
let num= document.querySelector("#number");
let em= document.querySelector("#email");
let pswrd= document.querySelector("#pswrd");
let msg= document.querySelector("#msg");
let btn= document.querySelector(".btn");

let popup= document.querySelector(".popup");
let ppicon= document.querySelector(".ppicon");
let ppmsg= document.querySelector(".ppmsg");
let ppbtn= document.querySelector(".ppbtn");

ppbtn.addEventListener("click", ()=>{popup.classList.remove("popup-open")});

let eye= document.querySelector("#eye");
eye.addEventListener("click", pdhandler);

function pdhandler()
{
    if(eye.classList.contains("fa-eye-slash"))
    {
        pswrd.type= "password";
        eye.classList.replace("fa-eye-slash", "fa-eye");
    }

    else if(eye.classList.contains("fa-eye"))
    {
        pswrd.type= "text";
        eye.classList.replace("fa-eye", "fa-eye-slash");
        // console.log(eye);
    }
    
}

fn.addEventListener("input", checkName);
num.addEventListener("input", checkMobile);
em.addEventListener("input", checkMail);
pswrd.addEventListener("input", checkPassword);
msg.addEventListener("input", checkMessage);

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
    let v= (pswrd.value);
    let sp= document.querySelector("#perror");

    if(v.length<6)
    {
        sp.innerHTML= '<i id="red" class="fa fa-exclamation-circle"> Requires atleast 6 characters</i>';
        return false;
    }
    if(!v.match( /[\d]/))
    {
        console.log("exe");
        sp.innerHTML= '<i id="red" class="fa fa-exclamation-circle">A digit is required</i>';
        return false;
    }
    sp.innerHTML= '<i id="green" class="fa fa-check"></i>';
    return true;
}
function checkMessage()
{
    let l= msg.value.length;
    let req= 10-l;

    let sp= document.querySelector("#msgerror");

    if(req>0)
    {
        sp.innerHTML= `<i id="red" class="fa fa-exclamation-circle"> ${req} more characters required </i>`;
        return false;
    }
    else
    {
        sp.innerHTML= '<i id="green" class="fa fa-check"></i>';
        return true;
    }
}

function check()
{
    if(!checkName() || !checkMobile() || !checkMail() || !checkPassword() || !checkMessage())
    {
        ppicon.outerHTML= '<i id="ppred" class="fa fa-exclamation-circle ppicon">';
        ppmsg.innerHTML= "Please fill the correct details.";
        popup.classList.add("popup-open");
        return false;
    }
    else
    {
        ppicon.outerHTML= '<i id="ppgreen" class="fa fa-check ppicon"></i>';
        ppmsg.innerHTML= "Form Submitted Successfully";
        popup.classList.add("popup-open");
        
        setTimeout(()=>{return true}, 20000);
    }
}