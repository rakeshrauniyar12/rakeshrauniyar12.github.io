let arrTech=JSON.parse(localStorage.getItem("skillsData"))||[];
let arrSoft=JSON.parse(localStorage.getItem("skillsData1"))||[];
document.querySelector("#btntech").addEventListener("click",()=>{
    save();
})
function save(){

    let value= document.querySelector("#tech").value;
    if(value!==""){
        arrTech.push(value);
        localStorage.setItem("skillsData",JSON.stringify(arrTech));
        document.querySelector("#tech").value="";
    }
   

}
document.querySelector("#showtech").addEventListener("click",()=>{
    console.log("heelo");
       showTech(arrTech);
})
document.querySelector("#showsoft").addEventListener("click",()=>{
    console.log("heelo");
    showSoft(arrSoft);
})
function showTech(arr){
    renderTech(arr);
}
function showSoft(arr1){
    renderTech1(arr1);
}
let renderTech=(arrTech1)=>{
    let cont= document.querySelector("#skills");
    cont.innerHTML=null;
    arrTech1.forEach((a)=>{
        let div= document.createElement("div");
    let img= document.createElement("img");
    img.src=a;
    div.addEventListener("click",()=>{
        delete1(a,arrTech1);
     })
    div.append(img);
    cont.append(div);

    })
}
renderTech(arrTech);
document.querySelector("#softbtn").addEventListener("click",()=>{
    save1();
})
function save1(){
    let value= document.querySelector("#soft").value;
    if(value!==""){
        arrSoft.push(value);
        localStorage.setItem("skillsData1",JSON.stringify(arrSoft));
        document.querySelector("#soft").value="";
    } 
    // else{
    //     alert("Fill appropriate url");
    // }
}
let renderTech1=(arrSoft)=>{
    let cont= document.querySelector("#skills");
    cont.innerHTML="";
    arrSoft.forEach((a)=>{
        let div= document.createElement("div");
       
    let img= document.createElement("img");
    img.src=a;
    div.addEventListener("click",()=>{
        delete2(a,arrSoft);
     })
    div.append(img);
    cont.append(div);

    })
}
function delete1(i,arr){
     let filtered= arr.filter((a)=>{
        return a!=i;
     })
     localStorage.setItem("skillsData",JSON.stringify(filtered));
     showTech(filtered);
     renderTech(filtered);
    
}
function delete2(i,arr){
    let filtered= arr.filter((a)=>{
       return a!=i;
    })
    localStorage.setItem("skillsData1",JSON.stringify(filtered));
    renderTech1(filtered);
    showSoft(filtered);
}


// Projects=================================================
let projectArr=JSON.parse(localStorage.getItem("projectData"))||[];
class Project{
    constructor(url,name,type,res,tech,desc){
        this.url=url;
        this.name=name;
        this.type=type;
        this.res=res;
        this.tech=tech;
        this.desc=desc;
    }
}
function showProject(){
    let url= document.querySelector("#image").value;
    let name= document.querySelector("#name").value;
    let type= document.querySelector("#type").value;
    let res= document.querySelector("#res").value;
    let stack= document.querySelector("#stack").value;
    let desc= document.querySelector("#desc").value;
    if(url!=="" && name!=="" && type!=="" && res!=="" && stack!=="" && desc!==""){
        let p1= new Project(url,name,type,res,stack,desc);
        projectArr.push(p1);
        localStorage.setItem("projectData",JSON.stringify(projectArr));
        renderProject(projectArr);
         document.querySelector("#image").value="";
         document.querySelector("#name").value="";
         document.querySelector("#type").value="";
         document.querySelector("#res").value="";
         document.querySelector("#stack").value="";
         document.querySelector("#desc").value="";
    }
   
}
function renderProject(data){
    let cont= document.querySelector("#project");
    cont.innerHTML="";
    data.forEach((el)=>{
       let div= document.createElement("div");
       let div1= document.createElement("div");
       let img= document.createElement("img");
       img.src=el.url;
       let h1= document.createElement("h1");
       h1.innerText=el.name;
       let p1= document.createElement("p");
       p1.innerText=`Type: ${el.type}`;
       let p2= document.createElement("p");
       p2.innerText=`Responsibilities: ${el.res}`;
       let p3= document.createElement("p");
       p3.innerText=`Tech-Stack: ${el.tech}`;
       let p4= document.createElement("p");
       p4.innerText=`Description: ${el.desc}`;
       let btn1= document.createElement("a");
       btn1.href=el.weburl;
       btn1.innerText="Live";
       let btn2= document.createElement("a");
       btn2.href=el.gitcode;
       btn2.innerText="Github Code";
       div.append(img);
       div1.append(h1,p1,p2,p3,p4,btn1,btn2);
       cont.append(div,div1);
    })
}
renderProject(projectArr);


