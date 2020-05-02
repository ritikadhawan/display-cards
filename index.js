const express = require('express');
const path = require('path');
const app = express();

const PORT = 8000;

app.use(express.static(path.join(__dirname, '/static')));

app.set('view engine','ejs');
app.set('views',__dirname + '/views');

app.use('/', require('./routes'));

app.listen(PORT,(err)=>{
    if(err){
        console.log("Error occured");
    }
    else{
        console.log(`Server running on port ${PORT}`);
    }
});