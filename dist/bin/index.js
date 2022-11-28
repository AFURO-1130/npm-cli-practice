#!/usr/bin/env node
'use strict';
const program = require('commander');
program
    .usage('-n yourname')
    .option('-n, --name <value>', 'your name', String, 'World')
    .parse(process.argv);
console.log('Hello ' + program.name + '!');
