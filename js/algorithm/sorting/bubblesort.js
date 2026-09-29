import {sleep} from "../../utils/sleep.js";
import{updateBar} from "../../ui/change_bars.js";
export async function bubbleSort(array,bars,speed){
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-i-1;j++){
            const labels=document.querySelectorAll(".label")
            bars[j].style.backgroundColor="red";
            bars[j+1].style.backgroundColor="red";
            await sleep(speed);
            if(array[j]>array[j+1]){
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
                 updateBar(j,array[j],bars,labels);
                 updateBar(j+1,array[j+1],bars,labels);
                bars[j+1].style.height=`${array[j+1]}px`;

            }
            bars[j].style.backgroundColor="#00ffcc";
             bars[j+1].style.backgroundColor="#00ffcc";
        }
        for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = "green";
    }
    }
}
