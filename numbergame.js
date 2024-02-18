

var counter = 0;
var randomNumber = randomnumbergenerator();

function randomnumbergenerator() {
    var num;
    num = Math.floor(Math.random() * 100) + 1;
    return num;
}

function counterupdate() {
    counter++;
    document.getElementById("attemptCounter").textContent = "Attempts: " + counter;
}

function show_user_History(guess, feedback) {
    var History;
    History = document.getElementById("History");
    var Item_list;
    Item_list = document.createElement("li");
    Item_list.textContent = "user Guess: " + guess + ", Feedback: " + feedback;
    History.appendChild(Item_list);
}

function restart_game() {

    location.href = "/Index.html"
}

function guess_logic() {
    var player_guess = document.getElementById("userInput").value;
    console.log("User's guess:", player_guess);

    if (player_guess == randomNumber) {
        document.getElementById("Feedback").textContent = "Congratulations! You guessed it!";
       
    }
    else if (player_guess < randomNumber) {
        document.getElementById("Feedback").textContent = "Too low. Try again!";
        Feedback.style.backgroundColor = "red";
       
    }
    else {
        document.getElementById("Feedback").textContent = "Too high. Try again!";
        Feedback.style.backgroundColor = "yellow";
        
    }
    counterupdate();
    document.getElementById("restart_game").style.display = "block";
    show_user_History(player_guess, document.getElementById("Feedback").textContent);
}
document.getElementById("userInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        guess_logic();
    }
});

document.getElementById("restart_game").addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", null);
});



document.getElementById("submitGuess").addEventListener("click", function () {
    guess_logic();
});

document.getElementById("restart_game").addEventListener("click", restart_game);

