// // var let , const
// let str = 'Hello world' ;
// console.log(typeof str);
// str =1 ;
// console.log(typeof str);
// let y; 
// console.log(y);

// let arr = [1,2,3,4,5];
// console.log(arr);
// console.log(arr.lastIndexOf(4));
// arr.push(6);
// console.log(arr);
// arr.unshift(0);

// const student ={
//     name: 'Nguyen Van A',
//     age: 18, 
//     sing: function(){
//         console.log('Sing a song');
//     }
// }
// student.age = 20
// console.log(student.age); 
// student.sing() ;

// function sum(a, b){
//     return a+ b;
// }
// const sum2 = (a,b) => {
//     return a+ b;
// }
// // const sum2 =(a, b) => a+ b; 

// const arr2 =[1, 2, 3, 4, 5, 6, 7] ;
// const myFunction = (arr) => {
//     for(let i = 0 ; i< arr.length; i++){
//         console.log(arr[i]);
//         if(i == 3){
//             arr[i] = 10;
//         }
//     }
//     console.log(arr);
//     // for (const element of arr) {
//     //     console.log(element);
//     // }
// }
// // myFunction(arr2);

// const function2 = () => {

//     if(true){
//         let a = 10;
//         const a = 10; 
        
//     }
//     console.log(a);
// }
// function2();


// const myFirstVariable ;



// const myButton = document.getElementById('my-button') ;
const myButton = document.querySelector('#my-button');
myButton.addEventListener('click', () => {
    // document.getElementsByClassName('change-html-content')[0].innerHTML= "Hello World" ;
    // document.querySelector('.change-html-content').style = "font-size: 100px" ;
    // document.querySelector('.change-html-content').style = "display: none" ;
})