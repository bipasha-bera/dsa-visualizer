import {sleep} from "../../utils/sleep.js";
import{updateBar} from "../../ui/change_bars.js";
export async function insertionSort(array,bars,speed){
    const labels=document.querySelectorAll(".label");
    for(let i=1;i<array.length;i++){
        let key=array[i];
        let j=i-1;
        bars[i].style.backgroundColor="orange";
        await sleep(speed);
        while(j>=0 && array[j]>key){
            bars[j].style.backgroundColor="red";
            array[j+1]=array[j];
           updateBar(j + 1, array[j + 1], bars, labels);
            await sleep(speed);
            bars[j].style.backgroundColor="#00ffcc";
            j--;
            }
          array[j + 1] = key;

        updateBar(j + 1, key, bars, labels);

        bars[i].style.backgroundColor = "#00ffcc";
    }
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = "green";
    }


}