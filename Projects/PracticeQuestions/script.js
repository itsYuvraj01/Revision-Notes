console.log('Practice questions');

const users = [
    {name:'Yuvraj', age:'24', id:'AIX123'},
    {name:'Aryan', age:'13', id:'AIX143'},
    {name:'Keshav', age:'45', id:'AIY923'},
    {name:'Vikash', age:'24', id:'YUF322'},
    {name:'Ajay', age:'45', id:'AJU766'},
    {name:'Abdul', age:'34', id:'AIK023'},
    {name:'Rehman', age:'34', id:'AIQ897'},
]

let result = {};
let property = 'age';

users.forEach((obj) => {
    let resultKey = obj[property];
    if(!result[resultKey]){
        result[resultKey] = [];
    }
    result[resultKey].push(obj);
})

console.log('output', result)

let newOutput = users.reduce((result, obj) => {
    let resultKey = obj[property];
    if(!result[resultKey]){
        result[resultKey] = [];
    }
    result[resultKey].push(obj);
    return result;
},{})

console.log('output 2', newOutput);