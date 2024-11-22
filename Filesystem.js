// Q1
const fs = require('fs');
const path = require('path');

function getfiles(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()){
            getfiles(fullPath);
        }
        else{
            allfiles.push(fullPath);
        }
    });

}
let allfiles = []
let path1 = __dirname ;  
getfiles(path1);

console.log(allfiles);

// Q2
// console.log('Update in modifications.txt to watch the modifications in real time.')
// fs.watch('modifications.txt' , (event , file) => {
//     console.log('The file' , file , 'is modified.')

//     console.log('It was' , event , 'event type.')

//     console.log('Content Updated: ' , fs.readFileSync('modifications.txt', 'utf8'))
// })


// Q3
const readline = require('readline');
const fileStream = fs.createReadStream('modifications.txt', { encoding: 'utf-8' });

const rl = readline.createInterface({
  input: fileStream,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  console.log(line);
});

rl.on('close', () => {
  console.log('Finished reading the file');
});

// Q4
function write(file , newdata){
    if(fs.existsSync(file)){
        var data = fs.readFileSync(file)
        var object = JSON.parse(data)

        object.push(newdata)
        object = JSON.stringify(object , null , 2)

        fs.writeFile(file , object ,err => {
            if (err) throw err
            console.log('New Data Added')
        })
    }
    else{
        fs.appendFileSync(file , JSON.stringify([newdata] , null , 2))
    }
}

let newData = {
    "country": "England"
}
write('data.json' , newData)
