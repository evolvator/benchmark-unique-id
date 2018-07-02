var Benchmark = require('benchmark');
var tb = require('travis-benchmark');
var async = require('async');

var lodash = require('lodash');

var uuidv1 = require('uuid/v1');
var uuidv3 = require('uuid/v3');
var uuidv4 = require('uuid/v4');
var uuidv5 = require('uuid/v5');

var chance = require('chance')();
var randomId = require("random-id");
var shortid = require('shortid');
var uniqid = require('uniqid');

var suite = new Benchmark.Suite(`speed unique id`);

suite.add('uuid@3.3.2 uuidv1', function() { uuidv1(); });
suite.add('uuid@3.3.2 uuidv3', function() { uuidv3('hello.example.com', uuidv3.DNS); });
suite.add('uuid@3.3.2 uuidv4', function() { uuidv4(); });
suite.add('uuid@3.3.2 uuidv5', function() { uuidv5('hello.example.com', uuidv5.DNS); });
suite.add('chance@1.0.16 android_id', function() { chance.android_id(); });
suite.add('chance@1.0.16 apple_token', function() { chance.apple_token(); });
suite.add('chance@1.0.16 bb_pin', function() { chance.bb_pin(); });
suite.add('chance@1.0.16 wp7_anid', function() { chance.wp7_anid(); });
suite.add('chance@1.0.16 wp8_anid2', function() { chance.wp8_anid2(); });
suite.add('chance@1.0.16 fbid', function() { chance.fbid(); });
suite.add('random-id@0.0.2', function() { randomId(); });
suite.add('shortid@2.2.8', function() { shortid.generate(); });
suite.add('uniqid@5.0.3', function() { uniqid() });

tb.wrapSuite(suite, function() { next(); });
suite.run({ async: true });
