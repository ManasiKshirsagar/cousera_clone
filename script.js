// inputBox=document.getElementsByClassName("input-box")

function openPopup(){
 let inputBox=document.getElementById("input-box")
 inputBox.style.opacity="1";
 console.log("Open Popup")
}

function closePopup(){
    let inputBox=document.getElementById("input-box")
    inputBox.style.opacity="0"
    console.log("Close Popup")
}

function openPopup1(){
    let inputBox=document.getElementById("input-box1")
    let body=document.getElementsByTagName("body")
    
    // document.body.style.opacity="0.1";
    inputBox.style.opacity="1";
    console.log("Open Popup1")
    
   }
   
   function closePopup1(){
    let inputBox=document.getElementById("input-box1")
    inputBox.style.opacity="0"
    console.log("Close Popup1")
}

function openAns(){
    let que1=document.getElementById("answer1")
    que1.style.opacity="1";
    que1.display="block"
    document.body.style.question.que1.answer1.display="block";
    console.log("function is called")
}