#!/usr/bin/env node
'use strict';

var program = require('commander');
var pkg = require('./package.json');
const util = require('util');
const { execFile } = require('child_process');
// const exec = util.promisify(require('child_process').execFile);

program.version(pkg.version);


program
  .command('sum <number1> <number2>')
  .description('Sum two numbers')
  .action(function sum(number1, number2) {
    console.log(Number(number1) + Number(number2));
  });

program
  .command('atendimento')
  .description('Criar a estrutura de um novo atendimento')
  .action(async function initprojeto() {
    // const { stdout, stderr } = await e.execFile('/scripts/atendimento');
    // if(stdout != ''){
    //   console.log(stdout);
    // }
    // if(stderr != ''){
    //   console.error(stderr);
    // }

    var bat = require.resolve('scripts/atendimento.bat'); 
    console.log(bat);
    // var profile = require.resolve('../profiles/app.profile.js'); 
    // var ls = spawn(bat, ['--profile', profile]); 
    // ls.stdout.on('data', function (data) { console.log('stdout: ' + data); }); 
    // ls.stderr.on('data', function (data) { console.log('stderr: ' + data); }); 
    // ls.on('exit', function (code) { console.log('child process exited with code ' + code); }); 

  });

program.parse(process.argv);