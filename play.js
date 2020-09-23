#!/usr/bin/env node
const { connect } = require('./client')
const net = require('net');

/**
 * Establishes connection with the game server
 */
console.log('Connecting ...');
connect();

process.stdout.write('\x07');

const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const { RemoteInterface } = require('./src/RemoteInterface')
const game = new Game(new UserInterface(), new RemoteInterface())

// Begin game
game.start()
