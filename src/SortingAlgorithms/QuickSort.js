import { waitforme } from "../components/waitForMe";
let delay = 50;
function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}
export async function QuickSort(ele,start,end){
    if(start<end) {
        let pivot_index = await partition(ele,start,end);
        await QuickSort(ele,start,pivot_index-1);
        await QuickSort(ele,pivot_index+1,end);
    }
    else {
        if(start>=0 && end >= 0 && start < ele.length && end < ele.length){
            ele[end].style.background = 'skyblue';
            ele[start].style.background = 'skyblue';    
        }
    }
}

async function partition(ele,l,r){
    let i = l-1;
    ele[r].style.background = 'red';
    for(let j = l;j<=r-1;j++){
        ele[j].style.background = 'yellow';
        await waitforme(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            i++;
            swap(ele[i],ele[j]);
            ele[i].style.background = 'orange';
            if( i != j) ele[j].style.background = 'pink';
            await waitforme(delay);
        }
        else {
            ele[j].style.background = 'pink';
        }
    }
    i++;
    await waitforme(delay);
    swap(ele[i],ele[r]);
    ele[r].style.background = 'pink';
    ele[i].style.background = 'skyblue';

    await waitforme(delay);

    for(let k = 0;k<ele.length;k++){
        if(ele[k].style.background != 'skyblue'){
            ele[k].style.background = 'pink';
        }
    }
    return i;
}