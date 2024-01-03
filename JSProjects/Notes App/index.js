let container= document.querySelector(".container");
let addbtn= document.querySelector(".addbtn");

addbtn.addEventListener("click", addpg);
document.body.addEventListener("click", removeNotes);

function addpg()
{
    console.log("clicked");
    let pg= document.createElement("p");
    pg.contentEditable= true;
    pg.classList.add("notes");

    let icon= document.createElement("i");
    icon.contentEditable= false;
    icon.classList.add("fa-solid", "fa-trash-can", "delicon");
    pg.appendChild(icon);

    container.appendChild(pg);
}

function removeNotes(e)
{
    // console.log(e, e.target, e.target.tagName);
    if(e.target.tagName=== "I")
    {
        console.log(e.target.parentElement);
        e.target.parentElement.remove();
    }
}