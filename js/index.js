// Your code goes here
let signMeUpBtn = document.getElementsByClassName("btn");

for(let i=0; i<signMeUpBtn.length; i++){
    signMeUpBtn[i].addEventListener("click",function(){
        alert("Sign Me Up Button Clicked");
    })
}