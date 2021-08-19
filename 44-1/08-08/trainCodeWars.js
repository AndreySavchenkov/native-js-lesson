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

------------------------------------------------------------------------------
    