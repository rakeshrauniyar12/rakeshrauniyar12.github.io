let arrTech=JSON.parse(localStorage.getItem("skillsData"))||[];
let arrSoft=JSON.parse(localStorage.getItem("skillsData1"))||[];
document.querySelector("#btntech").addEventListener("click",()=>{
    save();
})
function save(){
    console.log("hello");
    let value= document.querySelector("#tech").value;
    arrTech.push(value);
    localStorage.setItem("skillsData",JSON.stringify(arrTech));
    document.querySelector("#tech").value="";
    renderTech();
}

function showTech(){
    console.log("hello");
    renderTech(arrTech);
}
function showSoft(){
    console.log("hello");
    renderTech(arrSoft);
}
let renderTech=(arrTech1)=>{
    let cont= document.querySelector("#skills");
    cont.innerHTML="";
    arrTech1.forEach((a)=>{
        let div= document.createElement("div");
    let img= document.createElement("img");
    img.src=a;
    div.append(img);
    cont.append(div);

    })
}
renderTech(arrTech);
document.querySelector("#softbtn").addEventListener("click",()=>{
    save1();
})
function save1(){
    console.log("hello");
    let value= document.querySelector("#soft").value;
    arrSoft.push(value);
    localStorage.setItem("skillsData1",JSON.stringify(arrSoft));
    document.querySelector("#soft").value="";
  //  renderTech1();
}
let renderTech1=()=>{
    let cont= document.querySelector("#skills");
    cont.innerHTML="";
    arrSoft.forEach((a)=>{
        let div= document.createElement("div");
    let img= document.createElement("img");
    img.src=a;
    div.append(img);
    cont.append(div);

    })
}
