// Buttons
let pomodoro = document.getElementById('pomodoro');
let shortBreak = document.getElementById('short-break');
let longBreak = document.getElementById('long-break');
let displayedTime = document.getElementById('time');
let action = document.getElementById('action');
let reset = document.getElementById('reset');


// Event listeners
pomodoro.addEventListener('click',toggleTimer);
shortBreak.addEventListener('click', toggleTimer);
longBreak.addEventListener('click', toggleTimer);
action.addEventListener('click', toggleAction);

// Set Pomodoro as default when page loaded
window.onload = function(){
    pomodoro.className = "active-btn";

    time = convertTime(25);

    displayedTime.innerText = "25:00"; 

    currentEvent = "pomodoro";
};

function showNotification(){
    if(Notification.permission === "granted"){
        notificationMessage();
    } else if(Notification.permission === "default"){
        Notification.requestPermission().then(permission => {
            if(permission === "granted"){
                notificationMessage();
            };
        });
    };
};

function notificationMessage(){
    if(currentEvent === "pomodoro"){
        new Notification("Pomodoro has ended", {
            body: "take a break"
        });
    } else if(currentEvent === "short-break"){
        new Notification("Short break has ended", {
            body: "Start focusing"
        });
    } else if(currentEvent === "long-break"){
        new Notification("Long break has ended", {
            body: "Start focusing"
        });
    };
   
};

let timer;
let time;
let seconds;
let minutes;
let ticker;
let currentEvent;

function runTimer(){
    ticker = time;
    console.log(time);

    timer = setInterval(function(){
        ticker--;

        minutes = parseInt(ticker / 60);
        seconds = parseInt(ticker % 60);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        displayedTime.innerText = minutes + ":" + seconds;

        console.log(minutes + ":" + seconds);

        if (ticker == 0){
            resetTimer();
            showNotification();
            toggleAction();
        } ;
        
    },1000);

};

function resetTimer(){
    ticker = time;
    minutes = parseInt(ticker / 60);
    seconds = parseInt(ticker % 60);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    displayedTime.innerText = minutes + ":" + seconds;

    clearInterval(timer);

};

function convertTime(duration){
    ticker = parseInt(duration * 60);

    return ticker;
};

// Toggle between start and reset function
function toggleAction(){
    if(action.classList.contains("fa-play")){
        action.classList.remove("fa-play");

        action.classList.add("fa-undo-alt");

        runTimer();
    } else {
        action.classList.remove("fa-undo-alt");

        action.classList.add("fa-play");

        resetTimer();
    };
};

// Toggle between pomodoro, short break and long break
function toggleTimer(e){
    if(e.target.id === "pomodoro"){
        // Add class .active-btn to pomodoro button
        pomodoro.className = "active-btn";

        // Remove class active-btn from short break button             
        shortBreak.className = " ";

        // Remove class active-btn from long break button 
        longBreak.className = " ";
        
        time = convertTime(25);
        
        currentEvent = e.target.id;

        // Change timer
        resetTimer();

    } else if(e.target.id === "short-break") {
        // Add class .active-btn to short break button
        shortBreak.className = "active-btn";

        // Remove class active-btn from pomodoro button     
        pomodoro.className = " ";
        
        // Remove class active-btn from long break button 
        longBreak.className = " ";
       
        time = convertTime(5);

        currentEvent = e.target.id;

        // Change timer
        resetTimer();

    } else if (e.target.id === "long-break") {
        // Add class .active-btn to long break button
        longBreak.className = "active-btn";

        // Remove class active-btn from pomodoro button
        pomodoro.className = " ";
        
        // Remove class active-btn from short break button
        shortBreak.className = " ";

        time = convertTime(15);

        currentEvent = e.target.id;
        
        // Change timer
        resetTimer();
         
    };
};
