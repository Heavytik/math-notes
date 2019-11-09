let stepValue = 1;

function takeStep() {

    if (document.getElementById("Step" + stepValue)) {
        document.getElementById("Step" + stepValue).style.visibility = "visible";
        stepValue = stepValue + 1;
    }
}

function backStep() {
    stepValue = Math.max(stepValue - 1, 1);
    if (document.getElementById("Step" + stepValue)) {
        document.getElementById("Step" + stepValue).style.visibility = "hidden";
    }
}

function hideAll() {
    let i = 1;
    let step = document.getElementById("Step" + i);
    while (step) {
        step.style.visibility = "hidden";
        i = i + 1;
        step = document.getElementById("Step" + i);
        console.log("hedden " + i);
    }
}