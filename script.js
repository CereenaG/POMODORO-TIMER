const pomodoro=document.querySelector('.pomodoro');
const shortBreak=document.querySelector('.short-break');
const longBreak=document.querySelector('.long-break');
const loop=document.querySelector('.loop');
const display=document.getElementById('display-timer');
const start=document.querySelector('.start-btn')
let time
let defaultimer
pomodoro.addEventListener("click",()=>{
    display.textContent="25:00";
    defaultimer="25:00"
})
shortBreak.addEventListener("click",()=>{
    display.textContent="5:00";
    defaultimer="5:00"
})
longBreak.addEventListener("click",()=>{
    display.textContent="15:00";
    defaultimer="15:00"
})
loop.addEventListener("click",()=>{
    display.textContent="25:00";
    defaultimer="25:00"
})
let x;
const restart=document.createElement("button")
const stopb=document.createElement("button");

const resume=document.createElement("button");
stopb.id="stop-btn"
restart.id="restart-btn"
stopb.textContent="PAUSE"
restart.textContent="RESTART"
resume.textContent="RESUME"
resume.id="resume-btn"

start.addEventListener("click",()=>{
    start.remove();
    document.body.appendChild(stopb)
    document.body.appendChild(restart)
    let content=display.textContent.split(":")
    time=parseInt(content[0])*60+parseInt(content[1])
    x=setInterval(function startTimer(){
    time--
    let min=Math.floor(time/60);
    let sec=time%60
    display.textContent=String(min).padStart(2,"0")+":"+String(sec).padStart(2,"0");
    if(time<=0){
        clearInterval(x);
        display.textContent="00:00"
}},1000);
})
    
    restart.addEventListener("click",()=>{
        clearInterval(x)
        display.innerHTML=defaultimer
        start.click()


    })
    stopb.addEventListener("click", () => {
    clearInterval(x);
});

// Resume
resume.addEventListener("click", () => {
});