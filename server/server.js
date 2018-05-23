//Require in Express
const express = require('express');

//Create our express app
const app = express();

//this tells the server to use the public file when a request for
//a page is sent
app.use( express.static('server/public') );

//need to set a port of access
const port = 5000;

//listener for requests on port
app.listen( port, () => {
  console.log('listening on port', port);
});



//in network headers ensure the keyword matches the request method.
//in this case Request Method = GET and we used .get on app.
// this can only be used to send back data
// GOOD SERVERS ALWAYS RESPOND!!!! must have response for each /

//set req listeners for the /quote link in the html
app.get('/quote', (req, res) => {
  console.log('Handling request for /quote');
  res.send('Just be yourself!')

  //send not found
  // res.sendStatus(404);
});
