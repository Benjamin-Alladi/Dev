let fsel = document.querySelector("#fsel");
let ssel = document.querySelector("#ssel");

// fsel.addEventListener("focusin", fh);
// fsel.addEventListener("focusin", fh);


let finp= document.querySelector("#finp");
let sinp= document.querySelector("#sinp");

ssel.addEventListener("focusin", fin);
ssel.addEventListener("focusout", fout);

finp.addEventListener("input", finput);
sinp.addEventListener("input", sinput);


let target;
function fin() 
{
    console.log("focusin function is invoked.");

    for (let t of ssel) {

        // t holds the option.
        if (t.value === fsel.value) 
        {
            target = t;
            break;
        }
    }
    target.disabled = true;
    target.selected = false;
    target.classList.add("targetcl");

    console.log(target.classList);
    console.log(target);
}

function fout() 
{
    console.log("focusout function is invoked.");
    if (target != undefined) 
    {
        target.disabled = false;
        target.classList.remove("targetcl");

        console.log(target);
        target = undefined;
    }
}

function finput()
{
    console.log("finp function is invoked.");
    let val= getRes(fsel.value,ssel.value,finp.value);

    sinp.value= val;
}

function sinput()
{
    console.log("sinp function is invoked.");
    let val= getRes(ssel.value,fsel.value,sinp.value);

    finp.value= val;
}

function getRes(ftype,stype,fval)
{
    
   fval= Number(fval);
   let res;

   if(ftype==="celsius")
   {
      if(stype==="fahrenheit")
      {
        res= (fval * 9/5) + 32;
      }

      else if(stype==="kelvin")
      {
        res= fval + 273.15;
      }
   }

   else if(ftype==="fahrenheit")
   {
      if(stype==="celsius")
      {
        res= (fval - 32) * 5/9;
      }

      else if(stype==="kelvin")
      {
        res= (fval - 32) * 5/9 + 273.15
      }
   }

   else
   {
      if(stype==="celsius")
      {
        res= fval - 273.15;
      }
      else if(stype==="fahrenheit")
      {
        res= (fval - 273.15) * 9/5 + 32;
      }
   }

   res.toFixed(2);
   return res;
}

