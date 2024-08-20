// var arr = [6,8,4,7,3,1,2,5,9,10, 11];
// let arrLength = arr.length;
// let isEven = true;
// let newArray = [];
// let tempArray = [];

// console.log("arr--->", arr)

// for(let i=0; i<arr.length; i++){
//     tempArray.push(arr[i]);
//     if(arrLength > 2){
//         if(isEven){
//             // tempArray.push(arr[i]);
//             if(tempArray.length == 2){
//                 newArray.push(tempArray)
//                 tempArray =[];
//                 arrLength = arrLength - 2;
//                 isEven = false
//             }
//         } else {
//             // tempArray.push(arr[i]);
//             if(tempArray.length == 3){
//                 newArray.push(tempArray)
//                 tempArray =[];
//                 arrLength = arrLength - 3
//                 isEven = true
//             }
//         }
//     } else {
//         // tempArray.push(arr[i]);
//         arrLength = arrLength - 1
//         if(arrLength == 0){
//             newArray.push(tempArray)
//             tempArray =[];
//         }
//     }
// }

// console.log("newArray--->", newArray)
let arr = [6, 8, 4, 7, 3, 1, 2, 5, 9, 10, 11];
const array2D = [];
let flag = true;
let count = 0;
for (let i = count; i < arr.length; i++) {
  if (flag) {
    array2D.push(arr.slice(count, count + 2));
    flag = false;
    count = count + 2;
  } else {
    array2D.push(arr.slice(count, count + 3));
    flag = true;
    count = count + 3;
  }
  if (count >= arr.length) {
    break;
  }
}
console.log(array2D);


// console.log([] + []);
// console.log(5 + +'5');