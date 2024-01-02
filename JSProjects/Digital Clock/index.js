let h= document.querySelector(".hours");
let m= document.querySelector(".minutes");
let s= document.querySelector(".seconds");

function set()
{
    let d= new Date();
    let hr= d.getHours();
    let min= d.getMinutes();
    let sec= d.getSeconds();
    //converting hours into 12 hour format
    if(hr>12)
    {
        hr-=12;
    }

    h.innerHTML= (hr<10? "0":"")+hr;
    m.innerHTML= (min<10? "0":"")+min;
    s.innerHTML= (sec<10? "0":"")+sec;
}

setInterval(set,1000);