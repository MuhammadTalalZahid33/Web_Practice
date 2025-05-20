
// function changeTextOnClick(event){
//     // function always receives event when triggered
//     console.log(event);
    
//     let click1 = document.querySelector('.greet');    
//     click1.textContent = "MySelf";
//     alert("text changed perfectly");
// }

// let click1 = document.querySelector('.greet');    

// click1.addEventListener('click', changeTextOnClick);





// @@@@@@@@@@@@@@@@@@@@@@@###################$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%





// Changing the Default Behavior of Elements

// let aElement = document.querySelector('#anchorElement');

// function changeProperty(event){
//     event.preventDefault();

//     alert('default behavior removed');
// }

// aElement.addEventListener('click', changeProperty);







// @@@@@@@@@@@@@@@@@@@@@@@###################$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%

// AVOID TOO MANY LISTENERS


// let paras = document.querySelectorAll('p');

// for(let i = 1; i<paras.length; i++){
//     let par = paras[i];
//     // console.log(par);
    
//     par.addEventListener('click', function(){
//         alert('you have clicked on para : ' + i);
//     })

// }




// // best approach

//  let para = document.querySelector('.allPara');

// function avoidTooManyEventListeners(event){
    
//     alert("You have clicked on: \n" + event.target.textContent);

//     // for any specific element
//     // if(event.target.nodeName === 'SPAN'){
//     //     alert("You have clicked on: \n" + event.target.textContent);
//     // }

// }

// para.addEventListener('click', avoidTooManyEventListeners);


