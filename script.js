let username;
document.getElementById("mySubmit").onclick=function(){
    username=document.getElementById("myText").value;
    console.log(username);
}

document.getElementById("theme").textContent=`Hello, ${username}!`; }