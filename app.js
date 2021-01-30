// Get pomodoro button
let pomodoro = document.getElementById('pomodoro');

// Get short-break button
let shortBreak = document.getElementById('short-break');

// Get long-break button
let longBreak = document.getElementById('long-break');

// Get timer
let displayedTime = document.getElementById('time');

// Start button
let action = document.getElementById('action');

// Reset button
let reset = document.getElementById('reset');


// Add event listeners
pomodoro.addEventListener('click',toggleTimer);

shortBreak.addEventListener('click', toggleTimer);

longBreak.addEventListener('click', toggleTimer);

action.addEventListener('click', toggleAction);

// reset.addEventListener('click',resetTimer);

// Set Pomodoro as default when page loaded
window.onload = function(){
    pomodoro.className = "active-btn";
    time = convertTime(25);
    displayedTime.innerText = "25:00";   
}

let timer;
let time;
let seconds;
let minutes;
let ticker;

function toggleAction(e){
    if(action.classList.contains("fa-play")){
        action.classList.remove("fa-play");

        action.classList.add("fa-undo-alt");

        runTimer();
    } else {
        action.classList.add("fa-play");

        action.classList.remove("fa-undo-alt");
        
        resetTimer();
    }
    

    console.log(action.className)
    

}

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

        if (ticker == 0) {
            clearInterval(timer);
        } 
        
    },1000);

}

function resetTimer(){
    ticker = time;
    minutes = parseInt(ticker / 60);
    seconds = parseInt(ticker % 60);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    displayedTime.innerText = minutes + ":" + seconds;

    clearInterval(timer);

}

function convertTime(duration){
    ticker = parseInt(duration * 60);

    return ticker;
}

// One function for all events
function toggleTimer(e){
    console.log(e.target.id);
    
    if(e.target.id === "pomodoro"){
        // Add class .active-btn to pomodoro button
        pomodoro.className = "active-btn";

        // Remove class active-btn from short break button             
        shortBreak.className = " ";

        // Remove class active-btn from long break button 
        longBreak.className = " ";
        
        time = convertTime(25);

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
        
        // Change timer
        resetTimer();
         
    }
}


// function a(){
//     let test = "hello";
//     return test;
    
// }


// function sayHello(string){
//     let message = string;
//     console.log(message);
// }


// sayHello("hello");

// example passing value from function to function

// function a(){
//     let test = "hello";
//     return test;
    
// }


// function b(){
//     let valueofA = a();
//     console.log(valueofA);
// }


// b();


