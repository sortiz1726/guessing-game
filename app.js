console.log("HELLO OSCAR PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM

var myAnswer = undefined;

window.onload = () =>
{
    restartGame();
}

function restartGame()
{
    clearUserGuessInput();
    clearComputerResponse();
    clearRecordedGuesses();
    setMinAndMax(getRandomInt(0, 25 + 1), getRandomInt(75, 100 + 1));
}

function setMinAndMax(min, max)
{
    let minGuessElement = document.getElementById("minGuess");
    let maxGuessElement = document.getElementById("maxGuess");

    minGuessElement.innerHTML = min;
    maxGuessElement.innerHTML = max;
    myAnswer = getRandomInt(min, max + 1);
}

function submitGuess()
{
    let userGuess = getUserGuessInput();
    let answer = getAnswer();
    // setDebugMessage(typeof userGuess);

    if (userGuess === answer)
    {
        setComputerResponse(`Hooray ${userGuess} was the answer!`)
    }
    else if (userGuess > answer)
    {
        setComputerResponse("Your answer is too big. Please try again");
    }
    else
    {
        setComputerResponse("Your answer is too small, Please try again")
    }

    recordGuess(userGuess);
    clearUserGuessInput();
}

function getUserGuessInput()
{
    return Number(document.getElementById("userGuessInput").value);
}

function getAnswer()
{
    return myAnswer;
}

function setComputerResponse(response)
{
    let computerResponseElement = document.getElementById("computerResponse")
    computerResponseElement.innerHTML = response;
}

function recordGuess(guess)
{
    const para = document.createElement("p");
    const node = document.createTextNode(guess.toString());
    para.appendChild(node);

    const element = document.getElementById("userGuesses");
    element.appendChild(para);
}

function clearRecordedGuesses()
{
    const parent = document.getElementById("userGuesses");
    parent.innerHTML = "";
}

function clearUserGuessInput()
{
    document.getElementById("userGuessInput").value = "";
}

function clearComputerResponse()
{
    let computerResponseElement = document.getElementById("computerResponse");
    computerResponseElement.innerHTML = "";
}

// Internals
function setDebugMessage(message)
{
    let debugMessageElement = document.getElementById("debugMessage");
    let debugMessage = `DEBUG: ${message}`;
    debugMessageElement.innerHTML = debugMessage;
    console.log(debugMessage);
}

function getRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
