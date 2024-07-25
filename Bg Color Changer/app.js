

function randomColor(){
    const hex ="0123456789ABCDEF";
    let color ="#";

    for(let i=0;i<6 ;i++){
    color += hex[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color
    

}

let startButton = document.querySelector("#start")
let stopButton = document.querySelector("#stop")
let intervalId;


 let startFunction = function (){

    if(!intervalId){
        intervalId = setInterval(changeBgColor,1000);
    }

    function changeBgColor(){ 
        document.body.style.backgroundColor= randomColor();
    }
}

let stopFunction = function (){
    clearInterval(intervalId)
    intervalId= null;
}

document.querySelector("#start").addEventListener("click",startFunction);
document.querySelector("#stop").addEventListener("click",stopFunction);



