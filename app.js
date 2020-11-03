const express = require('express');
const app = express();





app.use(express.static('public'));
const day = new Date();
const date = day.toDateString().substring(0,3);
const hours = day.toTimeString().substring(0,2);

var requestTime = function (req, res, next){
const day = new Date();
const date = day.toDateString().substring(0,3);
const hours = day.toTimeString().substring(0,2);
let temp=false;
switch(date){
  case 'Mon' : 
  case 'Tue' : 
  case 'Wed' : 
  case 'Thu' : 
  case 'Fri' : temp =true ;
}
if ((temp===true) && (hours>9) && (hours<17) )
next();
else res.send('sorry');
    


};
app.use(requestTime) ;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/Homepage.html')
})

const port=2000 ;
app.listen(port,(err) =>{
    if ( err) console.log('connection failed')
    else console.log('serveur is runing  on port 4000 ')
    
   console.log(date);
   console.log(hours) ;
    // && hours>17 && hours<8 && date===0 && date===6 
    
})
