export function disableControls() {

    document.getElementById("generateBtn").disabled = true;

    document.getElementById("sortBtn").disabled = true;

    document.getElementById("sizeSlider").disabled = true;

    document.getElementById("speedSlider").disabled = true;

    document.getElementById("algorithmSelect").disabled = true;

}

export function enableControls() {

    document.getElementById("generateBtn").disabled = false;

    document.getElementById("sortBtn").disabled = false;

    document.getElementById("sizeSlider").disabled = false;

    document.getElementById("speedSlider").disabled = false;

    document.getElementById("algorithmSelect").disabled = false;

}