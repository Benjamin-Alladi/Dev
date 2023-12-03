let wrapper= document.querySelector(".wrapper");
let inpbox= document.getElementById("inpbox");

function getRes(wcount)
{
    let p="";
    let a= [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

    for(let i=0; i<wcount; i++)
    {
        let word="";
        let wlen= Math.random(1)*10;
        wlen= Math.ceil(wlen);
        console.log("wlen: "+wlen);

        for(let j=0; j<wlen; j++)
        {
            let ind= Math.floor(Math.random()*25);
            word+= a[ind];
        }
        p+= word+" ";
    }

    return p;
}

function genPara()
{
    let ele= document.createElement("p");
    ele.classList.add("pg");

    let wcount= inpbox.value;
    console.log(wcount +" "+ typeof wcount);
    if(wcount.length==0 || parseInt(wcount)<=0)
    {
        console.log("In if block.");
        alert("Number of words in the paragraph must be greater than 0.");
        return;
    }
    else
    {
        console.log("In else-block.");
        let res= getRes(wcount);
    
        ele.append(res);
        wrapper.append(ele);

        let b= document.createElement("button");
        b.classList.add("clrbtn");
        b.innerHTML="Clear";
        ele.insertAdjacentElement("afterend",b);
    }
    
}

// EventListener on clrbtn:
let clrbtn= document.getElementsByClassName("clrbtn");

clrbtn.addEventListener("click", clr(this));

function clr(ele)
{
    let pnode= ele.parentNode;
    console.log("Parent Node: "+ pnode);

    let cnodes= pnode.childNodes;
    // p.removeChild()
    console.log(cnodes+" "+ typeof cnodes);
}