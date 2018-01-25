'use strict';

const express = require('express');
const app = express();
const robot = require("robotjs");

// Speed up the mouse.
robot.setMouseDelay(2);

app.set('json spaces', 2);

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/mouse', (req, res) => {
  var mouse = getMousePos();
  res.json(mouse);
});

app.post('/up/:amount', (req, res) => {
  let amount = req.params.amount;
  var mouse = getMousePos();
  robot.moveMouse(mouse.x, mouse.y - amount);
  res.json({status:'OK'});
});

app.post('/down/:amount', (req, res) => {
  let amount = req.params.amount;
  var mouse = getMousePos();
  robot.moveMouse(mouse.x, mouse.y + amount);
  res.json({status:'OK'});
});

app.post('/left/:amount', (req, res) => {
  let amount = req.params.amount;
  var mouse = getMousePos();
  robot.moveMouse(mouse.x - amount, mouse.y);
  res.json({status:'OK'});
});

app.post('/right/:amount', (req, res) => {
  let amount = req.params.amount;
  var mouse = getMousePos();
  robot.moveMouse(mouse.x + amount, mouse.y);
  res.json({status:'OK'});
});

function getMousePos() {
  return robot.getMousePos();
}
