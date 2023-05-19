//https://observablehq.com/@mourner/sourdough-calculator
window.hours_to_ferment= function(proof_temp, levain) {
  const f = proof_temp * 9 / 5 + 32;
  const result = Math.log(levain / 100 / 0.894) * (-0.0000336713 * f ** 4 + 0.0105207916 * f ** 3 - 1.2495985607 * f ** 2 + 67.0024722564 * f - 1374.6540546564);

  FileMaker.PerformScript("presentResult", JSON.stringify(result));
};

window.startTimer = function() {
  FileMaker.PerformScript("startTimer")
};

window.countdownTimer = function(hours, minutes, seconds) {
  // Convert hours and minutes to seconds
  console.log(hours, minutes, seconds)
  let totalSeconds = (hours * 3600) + (minutes * 60) + Number(seconds);

  console.log((hours * 3600)+(minutes * 60)+Number(seconds))
  

  // Timer interval (1 second)
  const interval = setInterval(() => {
    // Calculate remaining hours, minutes, and seconds
    const remainingHours = Math.floor(totalSeconds / 3600);
    console.log(remainingHours)
    const remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
    console.log(remainingMinutes)
    const remainingSeconds = totalSeconds % 60;

    // Display the timer
    //console.log(`${remainingHours.toString().padStart(2, '0')}:${remainingMinutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`);
    // Output the result in an element with id="demo"
    document.getElementById("timer").innerHTML = `${remainingHours.toString().padStart(2, '0')}:${remainingMinutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    

    // Decrement totalSeconds
    totalSeconds--;

    // Check if timer reached zero
    if (totalSeconds < 0) {
      console.log("Done");
      clearInterval(interval);
      document.getElementById("timer").innerHTML = "DING!";
      FileMaker.PerformScript("timeDone", JSON.stringify(result))
    }
  }, 1000); // 1000 milliseconds = 1 second
}