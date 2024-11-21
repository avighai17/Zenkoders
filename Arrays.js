function _partition(arr, l, h){
    let pivot = arr[h], pl = l;
        for (let i = l; i <= h; i++){
            if (arr[i] < pivot){
                let temp = arr[i];
                arr[i] = arr[pl];
                arr[pl] = temp;
                pl++;
            }
        }
        let temp = arr[h];
        arr[h] = arr[pl];
        arr[pl] = temp;
        return pl;
}

function ksmall(arr, low, high, k){
        let partition = _partition(arr, low, high);
        if (partition == k - 1)
            return arr[partition];
        else if (partition < k - 1)
            return ksmall(arr, partition + 1, high, k);
        else
            return ksmall(arr, low, partition - 1, k);
}
arr1 = [3,4,1,2,7,6,5]
k = 3
let value = ktsmall(arr1 , 0 , arr1.length - 1 , k)
console.log(k ,'th smallest value is: ' , value)

arr2 = [1, 2, 3, 4, 5]
size = 2
for (let i = 0; i < arr2.length; i += size) {
    const chunk = arr2.slice(i, i + size);
    console.log(chunk)
}

function sub_array_sum(arr) {
    let res = arr[0];
    let start = 0 , end = 0
    let maxsubarray = []
    for (let i = 0; i < arr.length; i++){
        let currSum = 0;
        
        
        for (let j = i; j < arr.length; j++){
            currSum = currSum + arr[j];
            // res = Math.max(res, currSum);
            if(currSum > res){
                start = i
                end = j
                res = currSum
            }
        }
    }

    for(let i = start ; i <= end ; i++){
        maxsubarray.push(arr[i])
    }
    console.log('Sum: ' , res)
    return maxsubarray;
}

arr3 = [1,2,3,4,5,-5,-6,12 , 13]
ans = sub_array_sum(arr3)
console.log(ans)

arr4 = [1, 2, 2, 3, 3, 3]
arr5 = []
threshold = 1
let m = new Map()
for(let i = 0 ; i <= arr2.length ; i++){
    if(m.has(arr4[i])){
        m.set(arr4[i] , m.get(arr4[i]) + 1)
    }
    else{
        m.set(arr4[i] , 1)
    }
}
console.log(m)
for([key,value] of m){
    if(value > threshold) arr5.push(key)
}
console.log(arr5)


arr6 = [1, 2, 3, 4, 5]
arr7 = []
count = 0
rotate = 2
for(let i = arr6.length - rotate  ; count < arr6.length ; i++ && count++){
    arr7.push(arr6[i%arr6.length])
}

console.log(arr7)