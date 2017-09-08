var express = require('express');
var app = express();
var bot = require('./bot');
var builder = require('botbuilder');

app.get('/bot', bot.botCall);

app.post('/api/connect', bot.connector.listen());

app.listen(3000, function(err)
{
    console.log(err);
});