// CRUD
//иммутабельно  -> через создание копии и воншение изменений в нее

//массивы, обьекты, функции

//ссылочный тип данных

const student = {
    name: 'Bob',
    age: 30,
    friends: ['Alex', 'Donald']
}

const studentPlus = student;
studentPlus.name = 'John'
console.log(student)

const copyStudent = {...student}; //cпред оператор - (разворачиваем обьект
    //поверхностное копирование

const num = [1,2,3]
const copyNum = [...num];

student.friends.push('Nik')
console.log(student);

// глубокое копирование

const deepCopyStudent = {
    ...student,
    friends: [...student.friends]
}

console.log(deepCopyStudent)

deepCopyStudent.friends.push('Ann')

console.log(deepCopyStudent)
console.log(student)


//map (преобразование массива и возвразает новый массив)

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 120
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 85
    },
    {
        name: "Michel",
        age: 20,
        isMarried: false,
        scores: 89
    }, {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
]

const getStudentName = (s, i)  => {
   return `Student ${i}: ${s.name}, ${s.age} years old`
}

const names = students.map(getStudentName) ;

console.log(names)







