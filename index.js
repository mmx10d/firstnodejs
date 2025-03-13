const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://mmx10d:mo_db_ce_pn_tvunwkix77777776@cluster0.gspmy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('succes connect')
})
.catch((error) => {
    console.log('cant get database '+error);
})
const port = 3923;
const commands = ['/file','/test','/page','/what','/calcplus/:num1/:num2'];
const data = {
    'name':'awwad',
    'age':'17',
    'country':'yemen'
}
app.get(commands[0], (req,res) => {
    res.send('hello')
});
app.get(commands[1], (req, res) => {
    res.send('it work...');
});

app.get(commands[2], (req, res) => {
    // res.sendFile(__dirname+'/views/index.ejs');
    res.render('index.ejs');
});

app.get(commands[3], (req, res) => {
    res.send(data);
});

app.get(commands[4], (req, res) => {
    res.send(req.params.num1 + req.params.num2)
});

app.get('/', (req, res) => {
    res.send('all commands is:'+commands)
})
app.listen(port, () => {
    console.log('http://'+'localhost:'+port+'/');
});