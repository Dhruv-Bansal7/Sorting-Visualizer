import React, { useContext } from 'react';
import { getMergeSortAnimations } from '../SortingAlgorithms/MergeSort.js';
import { QuickSort } from '../SortingAlgorithms/QuickSort.js';
import { BubbleSort } from '../SortingAlgorithms/BubbleSort.js';
import { InsertionSort } from '../SortingAlgorithms/InsertionSort.js';
import { SelectionSort } from '../SortingAlgorithms/SelectionSort.js';


export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            length: 100,
        };
    }
    componentDidMount() {
        this.resetArray(this.state.length);
    }

    resetArray(length) {
        const array = [];
        for (let i = 0; i < length; i++) {
            array.push(randomIntFromInterval(5, 550));
        }
        const ele = document.querySelectorAll(".array-bar");
        for (let i = 0; i < ele.length; i++) {
            ele[i].style.backgroundColor = "pink";
        }
        this.setState({ array });

    }

    async mergeSort() {
        const ele = document.querySelectorAll(".array-bar");
        let l = 0;
        let r = parseInt(ele.length) - 1;
        await getMergeSortAnimations(ele, l, r, this.state.speed);
    }

    async bubbleSort() {
        const ele = document.querySelectorAll(".array-bar");
        await BubbleSort(ele);
    }

    async insertionSort() {
        const ele = document.querySelectorAll(".array-bar");
        await InsertionSort(ele);
    }

    async selectionSort() {
        const ele = document.querySelectorAll(".array-bar");
        await SelectionSort(ele);
    }

    async quickSort() {
        const ele = document.querySelectorAll('.array-bar');
        let l = 0;
        let r = ele.length - 1;
        await QuickSort(ele, l, r);
    }

    handleRangeChange = (e) => {
        const length = parseInt(e.target.value);
        this.setState({ length });
        this.resetArray(length);
    }

    render() {
        const { array } = this.state;
        return (
            <div className="absolute left-40">
                <div className='flex flex-row items-center justify-center'>
                    <button className='my-3.5 mx-4 ml-2 border-2 p-2 rounded-md hover:bg-sky-300 text-white' onClick={() => this.resetArray(this.state.length)}>Generate New Array</button>
                    <span className='flex flex-row'>
                        <h2 className='text-xl text-white'>Size : </h2>
                        <input
                            type="range"
                            className='arr_size mt-1.5 mx-3'
                            name='length'
                            min={6}
                            max={250}
                            value={this.state.length}
                            onChange={this.handleRangeChange} />
                        <label className='text-xl text-white' htmlFor="length">{this.state.length}</label>
                    </span>

                    <button className='my-3.5 mx-5 border-2 p-2 rounded-md hover:bg-sky-300 text-white' onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button className='my-3.5 mx-5 border-2 p-2 rounded-md hover:bg-sky-300 text-white' onClick={() => this.quickSort()}>Quick Sort</button>
                    <button className='my-3.5 mx-5 border-2 p-2 rounded-md hover:bg-sky-300 text-white' onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button className='my-3.5 mx-5 border-2 p-2 rounded-md hover:bg-sky-300 text-white' onClick={() => this.insertionSort()}>Insertion Sort</button>
                    <button className='my-3.5 mx-5 border-2 p-2 rounded-md hover:bg-sky-300 text-white' onClick={() => this.selectionSort()}>Selection Sort</button>
                </div>
                <div className='flex flex-row justify-center'>
                    {array.map((value, idx) => (
                        <div
                            className='array-bar inline-block mx-px items-center mt-4'
                            key={idx}
                            style={{
                                width: `${500 / this.state.length}px`,
                                backgroundColor: "pink",
                                height: `${value}px`,
                            }}>
                        </div>
                    ))}
                </div>


            </div>
        );
    }
}



function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
