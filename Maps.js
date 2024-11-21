let s1 = new Set([1,2,3,4,5])
let s2 = new Set([4,5,6,7])
let ans = new Set((s1.union(s2)).difference((s1.intersection(s2))))
console.log(ans)


map = new Map([['a', 1], ['b', 2], ['c', 3]])
function even(map,callback){
    const map1 = new Map()
    for([key,val] of map){
        if(callback(val)){
            if(map1.has(true))
                map1.set(true,[...map1.get(true) , key])
            else
                map1.set(true,[key])
        }
        else{
            if(map1.has(false))
                map1.set(false,[...map1.get(false) , key])
            else
                map1.set(false,[key])
        }
    }
    return map1
}

let ansmap = even(map,(val) => val % 2 === 0)
console.log(ansmap)


function subset(s1,s2){
    return s1.isSubsetOf(s2)
}

console.log('Set1 is subset of Set2: ',subset(s1,s2))
