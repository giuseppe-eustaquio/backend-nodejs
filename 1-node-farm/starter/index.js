const fs = require('fs')
const http = require('http')

// FILES



// SERVER

// create server
const server = http.createServer((req, res) => {
    console.log(req);
    res.end('Hello from the server')
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
})


// blocking, sync way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', textOut)

// console.log('File written!');


// non blocking, async way

// fs.readFile('./txt/start1.txt', 'utf-8', (err, path) => {
//     if (err) return console.log('ERROR');
//     fs.readFile(`./txt/${path}.txt`, 'utf-8', (err, data) => {
//         fs.readFile('./txt/append.txt', 'utf-8', (err, data2) => {
//             fs.writeFile('./txt/final.txt',`${data}\n${data2}`, 'utf-8', err => {
//                 console.log('Your file has been written');
//             })
//         })
//     })
// })

// console.log('Will read the file!');