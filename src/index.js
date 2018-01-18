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

app.get('/up', (req, res) => {
  var mouse = getMousePos();
  robot.moveMouse(mouse.x, mouse.y - 1);
  res.json({status:'OK'});
});

app.get('/up10', (req, res) => {
  var mouse = getMousePos();
  robot.moveMouse(mouse.x, mouse.y - 10);
  res.json({status:'OK'});
});

app.get('/down', (req, res) => {
  var mouse = getMousePos();
  robot.moveMouse(mouse.x, mouse.y + 1);
  res.json({status:'OK'});
});

app.get('/down10', (req, res) => {
  var mouse = getMousePos();
  robot.moveMouse(mouse.x, mouse.y + 10);
  res.json({status:'OK'});
});

app.get('/left', (req, res) => {
  var mouse = getMousePos();
  robot.moveMouse(mouse.x - 1, mouse.y);
  res.json({status:'OK'});
});

app.get('/left10', (req, res) => {
  var mouse = getMousePos();
  robot.moveMouse(mouse.x - 10, mouse.y);
  res.json({status:'OK'});
});

app.get('/right', (req, res) => {
  var mouse = getMousePos();
  robot.moveMouse(mouse.x + 1, mouse.y);
  res.json({status:'OK'});
});

app.get('/right10', (req, res) => {
  var mouse = getMousePos();
  robot.moveMouse(mouse.x + 10, mouse.y);
  res.json({status:'OK'});
});

function getMousePos() {
  return robot.getMousePos();
}
