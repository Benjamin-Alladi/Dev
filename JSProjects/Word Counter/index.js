let ta= document.querySelector(".ta");
let word= document.querySelector(".word");
let char= document.querySelector(".char");

ta.addEventListener("input", f);

function f(e)
{
    let text= e.target.value;
    console.log("text: "+ text)

    let charCount= text.length;

    let arr= text.trim().split(" ");
    console.log("array: "+ arr+" "+ arr.length);

    // Removing the prevailing spaces for correct Word-Count.

    let wordCount=0;
    for(let x of arr)
    {
        if(x!="")
        {
            wordCount++;
        }
    }

    word.innerHTML= wordCount;
    char.innerHTML= charCount;    
}