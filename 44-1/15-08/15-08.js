const todoListID_1 = '23fkdsf-4kj'//v1()
const todoListID_2 = '2dg345f-6dg'//v1()
const todoListID_3 = '2dg345f-6dg'//v1()

const todoLists = [
    {
        id: todoListID_1,
        title: 'What ot learn',
        filter: 'all'
    },
    {
        id: todoListID_2,
        title: 'What ot buy',
        filter: 'all',
    },
    {
        id: todoListID_3,
        title: 'What to watch',
        filter: 'all',
    }
]

const tasks = {
    [todoListID_1]: [
        {name: 'html', isDone: true},
        {name: 'css', isDone: true},
        {name: 'js', isDone: true},
    ],
    [todoListID_2]: [
        {name: 'fish', isDone: true},
        {name: 'beer', isDone: true},
        {name: 'meat', isDone: true},
    ],
    [todoListID_3]: [],
}

// reduce

let numbers = [23, 34, 55, 22, 33, 98];

const value = numbers.reduce((sum, el) => {
    sum = sum + el
    return sum
})

const max = numbers.reduce((acc, el) => acc > el ? acc : el)

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    }, {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

console.log(
    students.reduce((acc, el) => {
        return acc + el.scores
    }, 0)
)

const result = students.reduce((acc,el)=>{ //лучше юзать фильтр, финд
    if(el.name === 'Bob'){
        acc.push({...el,isMarried:false})
        return acc
    }
    acc.push(el)
    return acc
},[])

console.log(result)


