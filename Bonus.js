const set = new Set(['name', 'age', 'city'])

const arrayOfObjects = [
  { name: 'Alice', age: 25, city: 'New York' },
  { name: 'Bob', age: 30, country: 'Canada' },
  { name: 'Charlie', city: 'London', country: 'UK' }
]

function array(arrayOfObjects , set){
    for(i of arrayOfObjects){
        for(let key in i){
            if(!set.has(key)) delete i[key]
        }
    }
    return arrayOfObjects
}

console.log(array(arrayOfObjects , set))