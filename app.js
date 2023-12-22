
let userSequence=[];
let gameSequence=[];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let allBtns = document.querySelectorAll(".btn");

document.addEventListener("keypress", () => {
    if (started == false) {
        console.log("game started");
        started = true;
        levelUp();
    }
})

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    userSequence = []
    level++;
    h2.innerText = `LEVEL ${level}`;
    let btns = ["red", "blue", "black", "yellow"];
    let rndIndex = Math.floor(Math.random() * 4);
    let rndColor = btns[rndIndex];
    gameSequence.push(rndColor);
    let rndbtn = document.querySelector(`.${rndColor}`);
    btnflash(rndbtn);
    console.log(gameSequence);
}

function btnPress(){
    let btn = this;
    // console.log(this);
    btnflash(btn);
    let usrcolor = btn.getAttribute("id");
    userSequence.push(usrcolor);
    // console.log(userSequence);
    check(userSequence.length-1)
}

allBtns.forEach((e) => {
    e.addEventListener("click",btnPress)
});

function check(index){
    console.log(`curent level: ${level}`);
    if(userSequence[index]==gameSequence[index]){
        if(userSequence.length == gameSequence.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        document.querySelector("body").style.backgroundColor="red";
        h2.innerText = "GAME OVER!! PRESS ANY KEY TO RESTART\n your score was "+level;
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="white";
        },250)
        reset()
    }
}

function reset(){
    started = false;
    level=0;
    userSequence=[];
    gameSequence=[];
}
