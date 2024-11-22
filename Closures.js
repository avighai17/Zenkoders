function counter() {
    let count = 0; 
    
    return {
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
        retrieve: function(){
            return count;
        }
    };
}

const count = counter()
count.increment()
count.increment()
console.log('Counter after increaing 2 times: ' , count.retrieve())

count.decrement()
count.decrement()
count.decrement()
console.log('Counter after decreasing 3 times: ' , count.retrieve())


function generateFunctions(n) {
    let functions = [];
    for (let i = 1; i <= n; i++) {
        functions[`func${i}`] = function() {
            return i - 1;
        };
    }
    return functions;
}

const funcs = generateFunctions(3);
console.log('func1 lies at index: ' , funcs.func1()); 
console.log('func3 lies at index: ' , funcs.func3()); 
console.log('func2 lies at index: ' , funcs.func2()); 



function createTimer() {
    let count = 0;             
    let intervalId = null;   
    let isPaused = false;     

    return {
        start: function() {
            if (intervalId === null) { 
                intervalId = setInterval(() => {
                    if (!isPaused) {
                        count++;
                        console.log(count); 
                    }
                }, 1000); 
            }
        },
        pause: function(){
            isPaused = true;
        },
        resume: function() {
            isPaused = false;
        },
        stop: function stop() {
            clearInterval(intervalId);
            intervalId = null;
            count = 0; 
            console.log('Timer stopped');
        },
        getTime: () => count 
    };
}

const timer = createTimer();

timer.start();

setTimeout(() => {
    timer.pause();
    console.log('Timer paused');
}, 10000);

setTimeout(() => {
    timer.resume();
    console.log('Timer resumed');
}, 20000);

setTimeout(() => {
    timer.stop();
}, 25000);


function add(a,b){
    return a + b
}
function partial(func , val2){
    return function(val1){
        return func(val1,val2)
    }

}
const add5 = partial(add,5)
console.log('5 + 3 =' , add5(3))

