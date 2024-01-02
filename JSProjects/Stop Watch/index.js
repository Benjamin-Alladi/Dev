let hrs= document.querySelector(".hours");
let min= document.querySelector(".minutes");
let sec= document.querySelector(".seconds");

let stopicn= document.querySelector(".stopicn");
let starticn= document.querySelector(".playicn");
let reseticn= document.querySelector(".reseticn");

stopicn.addEventListener("click", stop);
starticn.addEventListener("click", start);
reseticn.addEventListener("click", reset);

let id=null;
let [h,m,s]= [0,0,0];

function reset()
{
    console.log("reset clicked");
    clearInterval(id);
    h=0,m=0,s=0;
    hrs.innerHTML= "00";
    min.innerHTML= "00";
    sec.innerHTML= "00";
}
function start()
{
    console.log("start clicked");
    {
        id= setInterval(update, 1000);
    }
}
function stop()
{
    console.log("stop clicked");
    clearInterval(id);
}


function update()
{
    s++;
    if(s==61)
    {
        s=0;
        m++;
        if(m==61)
        {
            m=0;
            h++;
        }
    }
    //converting to string and adding leading zeros for hours, minutes and seconds
    hrs.innerHTML= (h<10? "0"+h : h);
    min.innerHTML= (m<10? "0"+m : m);
    sec.innerHTML= (s<10? "0":"")+s;
}