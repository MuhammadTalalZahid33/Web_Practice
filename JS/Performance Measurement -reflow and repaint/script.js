
// Reflow:
// Reflow (also called layout) is when the browser calculates the positions and sizes of elements in the document.

// Repaint:
// Repaint happens when styles that do not affect layout are changed.
// Any style change that doesn't affect layout/position.









// // First Method

// // a total no. of 100 reflows and repaints are happening 

// const t1 = performance.now();

// for(let i=0; i<100; i++){
//     let para = document.createElement('p');
//     para.textContent = "this is para: " + i;
//     document.body.appendChild(para);
// }

// const t2 = performance.now();

// console.log("the total time taken by 1 is: ", t2-t1);










// // Second Method - BETTER

// // Only 1 reflow and repaint is happening 

// let t3 = performance.now();
// let div1 = document.createElement('div');
// for(let i=0; i<100; i++){
//     let para = document.createElement('p');
//     para.textContent = "this is para: " + i;
//     div1.appendChild(para);
// }

// document.body.appendChild(div1);
// let t4 = performance.now();

// console.log("the total time taken by 2 is: ", t4-t3);










// Third Method - BEST WAY

// Only 1 reflow and repaint at the time of appending document fragment

// ****************** DOCUMENT FRAGMENT

const t5 = performance.now();
let fragment = document.createDocumentFragment();

for(let i = 0; i<100; i++){
    let paras = document.createElement('p');
    paras.textContent = "this is para: " + i;
    fragment.appendChild(paras);
}

document.body.append(fragment);
const t6 = performance.now();

console.log("the total time for best code: ", t6-t5);

