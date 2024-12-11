// const os = require('node:os');

// // const totalMem = (os.totalmem()/1024/1024/1024);

// // console.log(totalMem);

// const totalTime = (os.uptime()/10/60/60)
// console.log(totalTime);

const fs = require('node:fs');

// const data = 'Hello, this is a test message!'; 
// fs.writeFileSync("text.txt", data)
// fs.appendFileSync("text.txt", data)
fs.renameSync("text.txt", 'hello.txt');



