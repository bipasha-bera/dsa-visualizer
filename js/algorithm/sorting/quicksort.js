import {sleep} from "../../utils/sleep.js";
import{updateBar} from "../../ui/change_bars.js";
export async function quickSort(array,bars,speed){
    const labels=document.querySelectorAll(".label");
    let n=array.length;
    await qs(array,0,n-1,bars,labels,speed);
    for (let i = 0; i < bars.length; i++) {
    bars[i].style.backgroundColor = "green"; 
    }
}
async function qs(array,low,high,bars,labels,speed){
    if(low>=high) return;
    let pivot=await findpivot(array,low,high,bars,labels,speed);
    await qs(array,low,pivot-1,bars,labels,speed);
    await qs(array,pivot+1,high,bars,labels,speed);
}
async function findpivot(array,low,high,bars,labels,speed){
    let pivot=array[low];
    bars[low].style.backgroundColor = "orange";
    let i=low;
    let j=high;
    while(i<j){
        while(array[i]<=pivot && i<high){
            bars[i].style.backgroundColor = "red";
            await sleep(speed);
            bars[i].style.backgroundColor = "#00ffcc";
            i++;
            
        }
      
        while(array[j]>pivot && j>low){
             bars[j].style.backgroundColor = "red";
            await sleep(speed);
            bars[j].style.backgroundColor = "#00ffcc";
            j--;
            
        }
        if(i<j) {
            bars[i].style.backgroundColor = "red";
            bars[j].style.backgroundColor = "red";
            await sleep(speed);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            updateBar(i,array[i],bars,labels);
            updateBar(j,array[j],bars,labels);
            await sleep(speed);
            bars[i].style.backgroundColor = "#00ffcc";
            bars[j].style.backgroundColor = "#00ffcc";
        }
    }
    bars[low].style.backgroundColor="orange";
    bars[j].style.backgroundColor="red";
    await sleep(speed);
    let temp = array[low];
    array[low] = array[j];
    array[j] = temp;
    updateBar(low,array[low],bars,labels);
    updateBar(j,array[j],bars,labels);
    bars[low].style.backgroundColor = "#00ffcc";
    bars[j].style.backgroundColor = "green";

await sleep(speed);
    return j;
}