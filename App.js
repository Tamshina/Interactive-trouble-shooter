// app.js
let step = 0;

function nextStep(choice) {
    step++;
    const questionDiv = document.getElementById("question");
    const decisionTreeDiv = document.getElementById("decision-tree");
    const resultDiv = document.getElementById("result");
    const solutionText = document.getElementById("solution-text");

    decisionTreeDiv.innerHTML = ''; // Clear previous options

    if (step === 1) {
        questionDiv.innerHTML = "Is the power cable properly connected?";
        createButtons(['Yes', 'No'], (btnChoice) => handlePowerConnection(btnChoice));
    } else if (step === 2) {
        if (choice === 'noDisplay') {
            questionDiv.innerHTML = "Is the power button working?";
            createButtons(['Yes', 'No'], (btnChoice) => handlePowerButton(btnChoice));
        } else if (choice === 'displayOn') {
            questionDiv.innerHTML = "Is your display showing any errors?";
            createButtons(['Yes', 'No'], (btnChoice) => handleDisplayError(btnChoice));
        }
    } else {
        showResult(choice);
    }
}

function createButtons(options, callback) {
    options.forEach(option => {
        const button = document.createElement("button");
        button.classList.add("btn", "bg-blue-500", "text-white", "py-2", "px-4", "rounded", "m-2");
        button.textContent = option;
        button.onclick = () => callback(option);
        document.getElementById("decision-tree").appendChild(button);
    });
}

function handlePowerConnection(choice) {
    if (choice === 'Yes') {
        nextStep('displayOn');
    } else {
        nextStep('noDisplay');
    }
}

function handlePowerButton(choice) {
    if (choice === 'Yes') {
        document.getElementById("solution-text").innerText = "Please check if the screen is set to the correct input.";
        showResult();
    } else {
        document.getElementById("solution-text").innerText = "Try replacing the power cable or check the power outlet.";
        showResult();
    }
}

function handleDisplayError(choice) {
    if (choice === 'Yes') {
        document.getElementById("solution-text").innerText = "Please refer to your display manual for error troubleshooting.";
        showResult();
    } else {
        document.getElementById("solution-text").innerText = "Consider resetting your display settings or updating drivers.";
        showResult();
    }
}

function showResult(choice) {
    const resultDiv = document.getElementById("result");
    resultDiv.classList.remove("hidden");
}
