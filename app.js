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

// Globals
let timer;
let time;
let seconds;
let minutes;
let ticker;
let currentEvent;

function runTimer(){
    ticker = time;

    timer = setInterval(function(){
        ticker--;

        minutes = parseInt(ticker / 60);
        seconds = parseInt(ticker % 60);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        displayedTime.innerText = minutes + ":" + seconds;

        if (ticker == 0){
            resetTimer();
            showNotification();
            toggleAction();

            action.classList.remove("fa-undo-alt");
            action.classList.add("fa-play");
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
        // Add class .active-btn
        pomodoro.className = "active-btn";

        // Remove class .active-btn
        shortBreak.className = " ";
        longBreak.className = " ";
        
        time = convertTime(25);
        
        currentEvent = e.target.id;

        resetTimer();

        action.classList.remove("fa-undo-alt");
        action.classList.add("fa-play");

    } else if(e.target.id === "short-break"){
        // Add class .active-btn
        shortBreak.className = "active-btn";

        // Remove class .active-btn
        pomodoro.className = " ";
        longBreak.className = " ";
       
        time = convertTime(5);

        currentEvent = e.target.id;

        resetTimer();

        action.classList.remove("fa-undo-alt");
        action.classList.add("fa-play");

    } else if (e.target.id === "long-break"){
        // Add class .active-btn
        longBreak.className = "active-btn";

        // Remove class .active-btn
        pomodoro.className = " ";
        shortBreak.className = " ";

        time = convertTime(15);

        currentEvent = e.target.id;
        
        resetTimer();

        action.classList.remove("fa-undo-alt");
        action.classList.add("fa-play");   
    };
};
