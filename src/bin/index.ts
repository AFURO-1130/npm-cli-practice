#!/usr/bin/env node
'use strict';

import yargs from 'yargs';

const argv = yargs
    .option('name', {
        alias: 'n',
        type: 'string',
        description: 'Your name',
        demandOption: true,
    })
    .option("age", {
        alias: 'a',
        type: 'number',
        description: 'Your age',
        default: 20,
    })
    .help()
    .parseSync();

console.log("Hello " + argv.name + "!" + " You are " + argv.age + " years old.");