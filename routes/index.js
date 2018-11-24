let express = require('express');
let router = express.Router();

let index = require(process.cwd() + '/modules/index');
let player = require(process.cwd() + '/modules/player');
let music_list = require(process.cwd() + '/modules/music_list');

router.get('/', (req, res) => {
  index(req, res);
});

router.get('/js/player.js', (req, res) => {
  player(req, res);
});

router.get('/js/musicList.js', (req, res) => {
  music_list(req, res);
});

module.exports = router;
