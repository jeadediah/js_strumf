
let wrap = document.querySelector(".wrap");
let infoAbout = document.querySelector(".infoAbout");

function makesmurfs(num) {
    let allSmurfs = [];
    for (var i = 0; i < num; i++) {
        allSmurfs.push(new CreateSmurfs());
    }
    return allSmurfs;
}

let smurfs = makesmurfs(108);

displaySmurfs();
/************************** DRUGI NACIN 
 function displaySmurfs() {
 let text = "";
 for (var i = 0; i < smurfs.length; i++) {
 text += "<div class='smurf'></div>";
 }
 wrap.innerHTML = text;
 };**************************************/

function displaySmurfs() {
    for (var i = 0; i < smurfs.length; i++) {
        let newDiv = document.createElement("div");
        newDiv.id = i;
        newDiv.addEventListener("mousemove", infos);
        if (smurfs[i].weapon === "pencil" && smurfs[i].attack === "thinks") {
            newDiv.className = "bigSmurf";
        } else {
            newDiv.className = "smurf";
        }
        wrap.appendChild(newDiv);
    }
}

function infos(e) {
    let current = smurfs[this.id];
    infoAbout.innerHTML = current.info();
    //infoAbout.style.top = e.y + "px";
    //infoAbout.style.left = e.x + "px";
}
;