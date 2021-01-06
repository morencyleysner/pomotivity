// Get pomodoro button
let pomodoro = document.getElementById('pomodoro');

// Get short-break button
let shortBreak = document.getElementById('short-break');

// Get long-break button
let longBreak = document.getElementById('long-break');

// Get timer
let timer = document.getElementById('time');

// Add event listeners
pomodoro.addEventListener('click', pomodoroEvent);

shortBreak.addEventListener('click', shortBreakEvent);

longBreak.addEventListener('click', longBreakEvent);


// Set Pomodoro as default when page loaded
window.onload = function(){
    pomodoro.classList.add('active-btn');
}

// Pomodoro event
function pomodoroEvent(e){
    console.log(e.target.id)
    if(e.target.id === "pomodoro"){
        pomodoro.classList.add('active-btn');

        shortBreak.classList.remove('active-btn');
        
        longBreak.classList.remove('active-btn');

        // Change timer
        timer.innerText = "25 : 00"
    }
}

// Short break event
function shortBreakEvent(e){
    console.log(e.target.id)
    if(e.target.id === "short-break") {
        shortBreak.classList.add('active-btn');

        pomodoro.classList.remove('active-btn');

        longBreak.classList.remove('active-btn');

         // Change timer
        timer.innerText = "05 : 00";
    }
}

// Long break event
function longBreakEvent(e){
    console.log(e.target.id)
    if( e.target.id === "long-break") {
        longBreak.classList.add('active-btn');

        pomodoro.classList.remove('active-btn');

        shortBreak.classList.remove('active-btn');

         // Change timer
        timer.innerText = "15 : 00";
    }
}

