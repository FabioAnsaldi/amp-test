#!/usr/bin/env node

'use strict';

const express = require('express');
const program = require('commander');
const path = require('path');

program
    .version('1.0.0')
    .option('-a, --address [string]', 'IP Address Server')
    .option('-p, --port [number]', 'Port server')
    .parse(process.argv);

let server = express();

if (!program.address)
    program.address = '127.0.0.1';
if (!program.port)
    program.port = '8080';

server.get('/', (req, res) => {
    res.sendFile(path.join(path.join(__dirname, '/'), 'index.html'));
})
    .use(express.static(__dirname + '/'))
    .listen(program.port, () => {

        console.log(`listening on http://${program.address}:${program.port}/`);
    });
