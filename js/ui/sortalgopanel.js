import{algorithmInfo} from '../data/sortdata.js';
const algoName = document.getElementById("algoName");
const bestCase = document.getElementById("bestCase");
const averageCase = document.getElementById("averageCase");
const worstCase = document.getElementById("worstCase");
const spaceComplexity = document.getElementById("spaceComplexity");

export function updateAlgorithmPanel(selectedAlgorithm) {

    const info = algorithmInfo[selectedAlgorithm];

    if (!info) return;

    algoName.textContent = info.name;
    bestCase.textContent = info.best;
    averageCase.textContent = info.average;
    worstCase.textContent = info.worst;
    spaceComplexity.textContent = info.space;
}