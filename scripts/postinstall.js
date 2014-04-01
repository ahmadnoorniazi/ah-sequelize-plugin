#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

var localFile   = path.normalize(__dirname + '/../config/mysql.js');
var projectFile = path.normalize(process.cwd() + '/../../mysql.js');

if(!fs.existsSync(projectFile)){
  console.log("coppying " + localFile + " to " + projectFile)
  fs.createReadStream(localFile).pipe(fs.createWriteStream(projectFile));
}