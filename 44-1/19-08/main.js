// buble sort

const array = [34, 0, 45, 778, 10, 3, 94,];

for (let j = 0; j < array.length-1; j++) {
    for (let i = 0; i < array.length-1-j; i++) {
        if(array[i] > array[i+1]) {
            // let temp = array[i+1]
            // array[i+1] = array[i]
            // array[i] = temp
            [array[i+1], array[i]] = [array[i], array[i + 1]]
        }
    }
}

console.log(array)

//array.sort

const names = ['Bob', 'Alex', 'Helge', 'Dimon', 'Viktor', 'igor', 1, 'Гена']
names.sort()


console.log(names)

const numbers = [100, 99, 2000, 1, -100];



const compFn = (a,b) => a < b ? -1 : 100
console.log(numbers.sort(compFn))
console.log(numbers.sort((a,b) => a - b))

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 85
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
];

console.log(students
    .sort((a,b) => a.scores - b.scores)
    .reverse()
)


