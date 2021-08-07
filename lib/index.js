#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var messages_utils_1 = require("./utils/messages.utils");
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var path = require('path');
var program = require('commander').program;
var parseArgs = require('minimist');
// Presentation message
clear();
console.log(chalk.magenta(figlet.textSync('Nest Maker CLI', { horizontalLayout: 'full' })));
//Configuration of process
program
    .version('0.0.1')
    .description('An example CLI for create NestJs components')
    .option('-n, --name <string>', 'Component name')
    .option('-m, --module', 'True or false for module file creation')
    .option('-s, --service', 'True or false for service file creation')
    .option('-f, --service-spec', 'True or false for service specs file creation')
    .option('-c, --controller', 'True or false for controller file creation')
    .option('-p, --controller-spec', 'True or false for controller specs file creation')
    .option('-e, --exception', 'True or false for exception file creation')
    // .option('-o, --o <type>', 'Other common parameter')
    .parse(process.argv);
var params = parseArgs(process.argv.slice(2));
if (params.n)
    params.name = params.n;
if (params.m)
    params.module = params.m;
if (params.s)
    params.service = params.s;
if (params.f)
    params['service-spec'] = params.f;
if (params.c)
    params.controller = params.c;
if (params.p)
    params['controller-spec'] = params.p;
if (params.e)
    params.exception = params.e;
if (!params.name)
    messages_utils_1.MessagesUtils.error('Name is required.');
// Check if the user sends params
if (!Object.keys(params).length) {
    program.outputHelp();
}
//# sourceMappingURL=index.js.map