import { waitforme } from "../components/waitForMe";
let delay = 50;
function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

export async function InsertionSort(ele) {
    ele[0].style.background = 'skyblue';
    for(let i=1;i<ele.length;i++){
        let j = i-1;
        let key = ele[i].style.height;
        ele[i].style.background = 'blue';

        await waitforme(delay);
        while(j>=0 && (parseInt(ele[j].style.height) > parseInt(key))) {
            ele[j].style.background = 'blue';
            ele[j+1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);

            for(let k = i;k>=0;k--){
                ele[k].style.background = 'skyblue';
            }
        }

        ele[j+1].style.height = key;
        ele[i].style.background = 'skyblue';
    }
}