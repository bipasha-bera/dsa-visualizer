import{sleep} from "../../utils/sleep.js";
import{updateBar} from "../../ui/change_bars.js";
export async function selectionSort(array,bars,speed){
    for(let i=0;i<array.length-1;i++){
        const labels=document.querySelectorAll(".label")
        let minIndex=i;
        bars[minIndex].style.backgroundColor="orange";
        for(let j=i+1;j<array.length;j++){
            bars[j].style.backgroundColor="red";
            await sleep(speed);
            if(array[j]<array[minIndex]){
                bars[minIndex].style.backgroundColor = "#00ffcc";
                minIndex=j;
                 bars[minIndex].style.backgroundColor = "orange";
            }
            if(j!==minIndex){
                bars[j].style.backgroundColor="#00ffcc";
            }

        }
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
        updateBar(minIndex,array[minIndex],bars,labels);
        updateBar(i,array[i],bars,labels) ;
         bars[i].style.backgroundColor = "green";
        
    }
     bars[array.length - 1].style.backgroundColor = "green";
}