let wrapper = document.querySelector(".wrapper");
let inpbox = document.getElementById("inpbox");

let count = 0;

function getRes(wcount) {
    let p = "";
    let a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (let i = 0; i < wcount; i++) {
        let word = "";
        let wlen = Math.random(1) * 10;
        wlen = Math.ceil(wlen);
        // console.log("wlen: "+wlen);

        for (let j = 0; j < wlen; j++) {
            let ind = Math.floor(Math.random() * 25);
            word += a[ind];
        }
        p += word + " ";
    }

    return p;
}

function genPara() {
    let ele = document.createElement("p");
    ele.classList.add("pg");

    let wcount = inpbox.value;
    console.log(wcount + " " + typeof wcount);
    if (wcount.length == 0 || parseInt(wcount) <= 0) {
        console.log("In if block.");
        alert("Number of words in the paragraph must be greater than 0.");
        return;
    }
    else {
        console.log("In else-block.");
        let res = getRes(wcount);

        let cl = `pg${count}`;
        ele.classList.add(cl);
        count++;

        ele.append(res);
        wrapper.append(ele);

        let btn = document.createElement("button");
        btn.classList.add("clrbtn", cl);
        btn.innerHTML = "Clear";

        btn.classList.add(cl);

        ele.insertAdjacentElement("afterend", btn);

        // console.log(ele.classList+" "+ btn.classList);
    }

};


let buttons = document.getElementsByClassName("clrbtn");

/*
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) { clr(event);});
}
*/
wrapper.addEventListener("click", function(event) {
    if (event.target.classList.contains("clrbtn")) {
        clr(event);
    }
});

function clr(event) {
    console.log("el");
    let targetClass = event.target.classList[1];

    console.log(targetClass);

    let target = document.getElementsByClassName(targetClass);
    console.log(target);

    for (let i = 0; i < target.length; i++) {
        event.target.remove();
        target[i].remove();
    }
}
