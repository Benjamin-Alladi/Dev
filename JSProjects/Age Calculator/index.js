let inp= document.querySelector("#inp");
let btn= document.querySelector(".btn");

let y= document.querySelector(".y");
let m= document.querySelector(".m");
let d= document.querySelector(".d");

btn.addEventListener("click", res);

function res()
{
    let cd= new Date();
    console.log(cd);
    // Setting Maximun Date to the input field.
    inp.max= cd.toISOString().split("T")[0];
    console.log(inp.max);

    
    let cy= cd.getFullYear();
    let cm= cd.getMonth()+1;
    let cdt= cd.getDate();
    console.log(cy,cm,cdt);

    let iv= new Date(inp.value);
    let iy= iv.getFullYear();
    let im= iv.getMonth()+1;
    let idt= iv.getDate();
    console.log(iy,im,idt);

    let years,month,days;

    years= cy-iy;

    if(cm<im)
    {
        years--;
        months= (12-im)+cm;
    }
    else
    {
        months= cm-im;
    }

    if(cdt<idt)
    {
        months--;

        if(years<0)
        {
            years=0;
        }
        if(months<0)
        {
            months= 11;
        }

        days= (30-idt)+cdt;
    }
    else
    {
        days= cdt-idt;
    }
    console.log(years,months,days);

    y.innerHTML= years;
    m.innerHTML= months;
    d.innerHTML= days;

    greet(days);
}

function greet(d)
{
    let nbox= document.querySelector(".nbox");
    let ntf= document.createElement("div");
    ntf.classList.add("ntf", "ntfstyle");
    if(d==0)
    { 
        ntf.classList.add("green");
        ntf.innerHTML= `<i class='fas fa-birthday-cake'></i> Happy Birthday !!`;
    }
    else
    {
        ntf.classList.add("red");
        ntf.innerHTML= `<i class="fas fa-bullhorn"></i> <span class="ntfdays">${365-d}</span> days left for your Birthday !!`;
    }
    nbox.appendChild(ntf);

    setTimeout(()=>{ntf.remove()},4000);
}