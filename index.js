let sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-220px";
}
let openResume = document.getElementById("openResume");
openResume.onclick = () => {
  window.open("./Abhinandan_Rauniyar_Resume.pdf", "_blank");
};
document.querySelector("#live").addEventListener("click", () => {
  window.location.href =
    "https://drive.google.com/file/d/1ZrjVTMSBIURhAiG4Rn5PwUQLUf135Blx/view?usp=sharing";
});
document.querySelector("#code").addEventListener("click", () => {
  window.location.href = "https://github.com/Rajul-Tiwari/majestic-vest-8576";
});
