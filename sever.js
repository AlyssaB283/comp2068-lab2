//git remote add origin https://github.com/AlyssaB283/comp2068-lab2.git
//git push -u origin master this it to push 
const express = require('express');
const app = express();
const PORT = 3000;
const handleURLCal = require('./math'); //get the math file here 

//tell them to use said math file 
app.get('/', handleURLCal);
app.listen(PORT);
console.log(`Yup you're runing on http://localhost:${PORT}`);