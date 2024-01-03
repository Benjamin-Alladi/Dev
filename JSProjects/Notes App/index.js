let container= document.querySelector(".container");
let addbtn= document.querySelector(".addbtn");

addbtn.addEventListener("click", addpg);
document.body.addEventListener("click", removeNotes);


if(localStorage.length!=0)
{
    container.innerHTML= localStorage.getItem("ncontainer");
}

function addToLocal()
{
    localStorage.setItem("ncontainer", container.innerHTML);
}
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
    addToLocal();
}

function removeNotes(e)
{
    // console.log(e, e.target, e.target.tagName);
    if(e.target.tagName=== "I")
    {
        console.log(e.target.parentElement);
        e.target.parentElement.remove();
        addToLocal();
    }
};

document.body.addEventListener("input", func);

function func(e)
{
    if(e.target.classList.contains("notes"))
    {
        addToLocal();
    }
}

