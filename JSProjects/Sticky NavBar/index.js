let navbar= document.querySelector(".navbar");

window.addEventListener("scroll", f);

function f()
{
    if(window.scrollY>=185)
    {
        console.log(navbar.classList);
        navbar.classList.add("sticky");
    }
    else
    {
        console.log(navbar.classList);
        navbar.classList.remove("sticky");
    }

}