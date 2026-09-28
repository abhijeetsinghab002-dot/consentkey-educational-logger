'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),{validateEvent}=require('../server');
test('accepts a valid local keyboard event',()=>assert.equal(validateEvent({type:'keydown',key:'A',timestamp:Date.now()}),true));
test('rejects unsupported event types',()=>assert.equal(validateEvent({type:'system-hook',key:'A',timestamp:Date.now()}),false));
test('rejects oversized key values',()=>assert.equal(validateEvent({type:'keyup',key:'x'.repeat(100),timestamp:Date.now()}),false));
test('rejects missing timestamps',()=>assert.equal(validateEvent({type:'keyup',key:'Enter'}),false));
