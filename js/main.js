import {
    bubbleSort,
    selectionSort,
    insertionSort,
    mergeSort,
    quickSort,
    renderBars
} from "./exports.js";

import {
    disableControls,
    enableControls
} from "./ui/controls.js";
import { updateAlgorithmPanel } from "./ui/sortalgopanel.js";

const generateBtn = document.getElementById("generateBtn");
const arrayContainer = document.getElementById("array-container");
const sizeSlider=document.getElementById("sizeSlider");
const sizeValue=document.getElementById("sizeValue");
const speedSlider = document.getElementById("speedSlider");
const speedValue = document.getElementById("speedValue");

let array=[];
let arraySize=10;
sizeSlider.addEventListener("input", () => {

    arraySize = Number(sizeSlider.value);

    sizeValue.textContent = arraySize;

    generateArray();
});


let animationSpeed=200;
speedSlider.addEventListener("input", () => {

    animationSpeed = Number(speedSlider.value);

    speedValue.textContent = `${animationSpeed} ms`;

});

//generating the bars

function generateArray(){
    arrayContainer.innerHTML="";
    array=[];
    for(let i=0;i<arraySize;i++){
        let randomnum=Math.floor(Math.random() *400)+20;
        array.push(randomnum);

    }
    renderBars(array,arrayContainer);
}

// Button event
generateBtn.addEventListener("click", generateArray);


// Generate array automatically when page loads
generateArray();
  
const sortBtn =
document.getElementById("sortBtn");

const algorithmSelect =
document.getElementById("algorithmSelect");
algorithmSelect.addEventListener("change", () => {

    updateAlgorithmPanel(algorithmSelect.value);

});


sortBtn.addEventListener("click", async () => {
    disableControls();

    const bars = document.querySelectorAll(".bar");

    const algorithm = algorithmSelect.value;

    if (algorithm === "bubble") {

        await bubbleSort(array,bars,animationSpeed);

    } else if (algorithm === "selection") {

        await selectionSort(array,bars, animationSpeed);

    } else if (algorithm === "insertion") {
        
        await insertionSort(array,bars,animationSpeed);

    } else if (algorithm === "merge") {

        await mergeSort(array,bars, animationSpeed);

    } else if (algorithm === "quick") {

        await quickSort(array,bars,animationSpeed);

    }
    enableControls();
 
});
