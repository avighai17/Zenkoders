const student = { subject: 'IS' , dep: 'CS' };
const teacher = { subject: 'PF' ,  dep: 'EE' , salary: '100000'};

const merge = { ...student, ...teacher };
console.log(merge);

const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: '',
    e: function(){}
}

function func_type(obj){
    let arr = []
    for(let key in obj){
        if(typeof obj[key] == 'function') arr.push(key)
    }
    return arr
}
let ans1 = func_type(obj1)
console.log(ans1)


function removeNull(obj){
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            value = obj[key];
            console.log(key, value);
            if(!obj[key]){
                delete obj[key]
                //console.log(key,value)
            }
        }
    }
    
    return obj
}
console.log(obj1)
const obj2 = removeNull(obj1)
console.log(obj2)