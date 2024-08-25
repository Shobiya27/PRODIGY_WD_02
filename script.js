window.onload = function () 
   {
    let minutes = 0 ;
    let seconds = 0;
    let milliseconds = 0;
    let display = document.getElementById("display");
    let buttonStart = document.getElementById('start');
    let buttonStop = document.getElementById('stop');
    let buttonReset = document.getElementById('reset');
    let interval;

    function updateDisplay() 
    {
        display.innerHTML = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds) + ":" + (milliseconds < 10 ? "0" + milliseconds : milliseconds);
    }

    function startTimer() 
    {
        milliseconds++;
        if (milliseconds >= 100) 
        {
            milliseconds = 0;
            seconds++;
        }
        if (seconds >= 60) 
        {
            seconds = 0;
            minutes++;
        }
        updateDisplay()
    }

    buttonStart.onclick = function () 
    {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () 
    {
        clearInterval(interval);
    }

        buttonReset.onclick = function () 
    {
        clearInterval(interval);
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
        updateDisplay()
    }

    updateDisplay()
}