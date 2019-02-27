
var express = require('express');
var app = express();
var firebase=require('firebase-admin');
var accountSid="ACf96302976ecd7b895973a7c4d1421050";
var authToken="4dad52c868e677ab031973f2139b1ce3";
var client= require('twilio')(accountSid, authToken );
const urlencoded = require('body-parser').urlencoded;
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const response = new VoiceResponse();
var service=require("../accountkey.json");


var numbers=[];
var config = {
  apiKey: "AIzaSyDwkuCzBemsM4DBIOqA4cEbqFNjYSFd-Cc",
  authDomain: "sihproject-87ceb.firebaseapp.com",
  databaseURL: "https://sihproject-87ceb.firebaseio.com",
  projectId: "sihproject-87ceb",
  storageBucket: "sihproject-87ceb.appspot.com",
  messagingSenderId: "412273989020",
  credential: firebase.credential.cert(service)
};
firebase.initializeApp(config);
const db=firebase.firestore();

response.gather();
app.use(urlencoded({ extended: false }));


function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(numbers[0]);
    }, 3000);
  });
}

async function getnum(){
  db.collection('maternaldb').get().then((snapshot) => {
    console.log(snapshot.docs.forEach(doc => {
       numbers.push(doc.data().phone);
      }))
  });

  var result = await resolveAfter2Seconds();


}

app.get('/callme', async function(req, res){
  
    
    client.calls.create({
      method: 'get',
      url: 'https://raw.githubusercontent.com/akshitagupta7/sample_twilio/master/hello.xml',
      to:'+'+ numbers[0],
      from:'+16413231328',
      statusCallbackEvent: 'initiated ringing answered completed',
      statusCallback: 'https://52aaebe0.ngrok.io/voice',
      statusCallbackMethod: 'POST'
    }, function(err,call){
      if(err){
        console.log(err);
      }else{
        process.stdout.write(call.sid);
      }
    });
    
    
})

getnum();

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.post('/voice', (request, response) => {
  
  // Use the Twilio Node.js SDK to build an XML response
  const twiml = new client.TwimlResponse();

  // Use the <Gather> verb to collect user input
  twiml.gather({ numDigits: 1 }, gatherNode => {
    gatherNode.say('For sales, press 1. For support, press 2.');
  });

  // If the user doesn't enter input, loop
  twiml.redirect('/voice');

  // Render the response as XML in reply to the webhook request
  response.type('text/xml');
  response.send(twiml.toString());
});

const gather = response.gather({
  input: 'speech',
  action: '/completed'
});
gather.say('Welcome to Twilio, please tell us why you\'re calling');
app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
