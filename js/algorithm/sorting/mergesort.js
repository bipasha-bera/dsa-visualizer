import {sleep} from "../../utils/sleep.js";
import{updateBar} from "../../ui/change_bars.js";
export async function mergeSort(array,bars,speed){
    const labels=document.querySelectorAll(".label");
    let n=array.length;
    await ms(array,0,n-1,bars,labels,speed);
    for (let i = 0; i < bars.length; i++) {
    bars[i].style.backgroundColor = "green";
}
}
async function ms(array,low,high,bars,labels,speed){
    if(low>=high) return;
    let mid=Math.floor((low+high)/2);
    await ms(array,low,mid,bars,labels,speed);
    await ms(array,mid+1,high,bars,labels,speed);
    await merge(array,low,mid,high,bars,labels,speed);
}
async function merge(array,low,mid,high,bars,labels,speed){
    let left=low;
    let right=mid+1;
    let temp=[];
    while(left<=mid && right<=high){
       const leftBar = left;
       const rightBar = right;

    bars[leftBar].style.backgroundColor = "red";
    bars[rightBar].style.backgroundColor = "red";

    await sleep(speed);

    if(array[left] <= array[right]){
    temp.push(array[left]);
    left++;
    }
    else{
    temp.push(array[right]);
    right++;
    }

bars[leftBar].style.backgroundColor = "#00ffcc";
bars[rightBar].style.backgroundColor = "#00ffcc";
    }
    while(left<=mid){
        temp.push(array[left]);
            left++;
    }
    while(right<=high){
        temp.push(array[right]);
            right++;
    }
    for(let i=low;i<=high;i++){
        array[i]=temp[i-low];
        updateBar(i,array[i],bars,labels);
        bars[i].style.backgroundColor="orange";
        await sleep(speed);
        bars[i].style.backgroundColor = "#00ffcc";
    }
}
