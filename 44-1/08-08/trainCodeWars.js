//
// const str = "hello world!";
//
// const reverseStr = (str) => {
//     let newArr = str.split(' ').reverse().join(' ')
//     console.log(newArr);
// }
//
// reverseStr(str);

//---------------------------------------------------------------

// let arr = [1,-2,0,4,5]
//
// let newArr=[]
//
// const reverseNumber = (arr) => {
//     newArr = arr.map(number => {
//         if(number < 0){
//             return Math.abs(number)
//         } if (number == 0) {
//             return 0
//        } else {
//             return -number
//        }
//     })
// }
//
// reverseNumber(arr)
//
// console.log(newArr)

//-------------------------------------------------------------------
// function expressionMatter(a, b, c) {
//     let arr = [];
//     arr.push(a * ( b + c ));
//     arr.push(a *  b * c);
//     arr.push(a +  b * c);
//     arr.push((a +  b) * c);
//
//     return arr.reduce((sum, el)=>{
//         if (sum > el){
//             return sum
//         }
//         return el
//     },0)// highest achievable result
// }
//
// console.log(expressionMatter(1,2,3))

//------------------------------------------------------------------------------
// const array = [1, 2, 3,10];
//
// function sumArray(array) {
//     const max = Math.max.apply(null,array);
//     const min = Math.min.apply(null,array);
//
//     console.log(max);
//     console.log(min);
//
//     let result = array.reduce((sum, elem) => {
//         return sum + elem
//     })
// return result - max - min
//
// }
//
// console.log(sumArray(array));

//----------------------------------------------------------------------------------------


// let number = 1234;
// sNumber = number.toString();
// let array = [];
//
// for (let i = 0; i < sNumber.length; i++) {
//     array.push(+sNumber.charAt(i))
// }
//
//
// console.log(array.reverse());

//---------------------------------------------------------------------------------------------

