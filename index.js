
let sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-220px";
}
let openResume = document.getElementById("openResume");
openResume.onclick=()=>{
    window.open("./fw19_0048-Abhinandan-Rauniyar-Resume (2).pdf", '_blank');
}
