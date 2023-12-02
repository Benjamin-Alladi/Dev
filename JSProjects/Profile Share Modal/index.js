let modal= document.querySelector(".modal");
let overlay= document.querySelector(".overlay");


// openModel:
function openModel()
{
    modal.classList.add("modalActive");
    overlay.classList.add("overlayActive");
}

// closeModal:
function closeModal()
{
    modal.classList.remove("modalActive");
    overlay.classList.remove("overlayActive");
}