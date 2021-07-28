// CRUD
//иммутабельно  -> через создание копии и воншение изменений в нее

//массивы, обьекты, функции

//ссылочный тип данных

// const student = {
//     name: 'Bob',
//     age: 30,
//     friends: ['Alex', 'Donald']
// }
//
// const studentPlus = student;
// studentPlus.name = 'John'
// console.log(student)
//
// const copyStudent = {...student}; //cпред оператор - (разворачиваем обьект
//     //поверхностное копирование
//
// const num = [1,2,3]
// const copyNum = [...num];
//
// student.friends.push('Nik')
// console.log(student);
//
// // глубокое копирование
//
// const deepCopyStudent = {
//     ...student,
//     friends: [...student.friends]
// }
//
// console.log(deepCopyStudent)
//
// deepCopyStudent.friends.push('Ann')
//
// console.log(deepCopyStudent)
// console.log(student)
//
//
// //map (преобразование массива и возвразает новый массив)
//
// const students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 120
//     },
//     {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 85
//     },
//     {
//         name: "Michel",
//         age: 20,
//         isMarried: false,
//         scores: 89
//     }, {
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 100
//     }
// ]
//
// const getStudentName = (s, i)  => {
//    return `Student ${i}: ${s.name}, ${s.age} years old`
// }
//
// const names = students.map(getStudentName) ;

//homework 2 in old.code.mu --------------------------------------------------------------------------

//1

// for (let i = 0; i <= 100; i++) {
//     console.log(i)
// }

//2

// for (let i= 100; i >= 0; i--){
//     console.log(i)
// }

//3

// for(let i = 0; i <= 100; i++) {
//     if(i%2 == 0){
//         console.log(i)
//     }
// }

//4

// let arr = [];
// let x = 'x';
//
// for(let i = 0; i < 10; i++) {
//     arr.push(x)
// }
// console.log(arr)

//5

// let arr = [];
//
//
// for(let i = 1; i <= 10; i++) {
//     arr.push(i)
// }
// console.log(arr)

//6

// let arr = [];
//
//
// for(let i = 1; i <= 10; i++) {
//     arr.push(+Math.random().toFixed(2))
// }
// console.log(arr)











