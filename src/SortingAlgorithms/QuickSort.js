import { waitforme } from "../components/waitForMe";
let delay = 30;
function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}
export async function QuickSort(ele,l,r){
    if(l<r) {
        let pivot_index = await partition(ele,l,r);
        await QuickSort(ele,l,pivot_index-1);
        await QuickSort(ele,pivot_index+1,r);
    }
    else {
        if(l>=0 && r >= 0 && l < ele.length && r < ele.length){
            ele[r].style.background = 'skyblue';
            ele[l].style.background = 'skyblue';
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
            if( i != j) ele[j].style.background = 'orange';
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