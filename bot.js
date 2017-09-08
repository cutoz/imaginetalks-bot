
module.exports = {};
var builder = require('botbuilder');
var connector = new builder.ChatConnector();

module.exports.botCall = function(request, response)
{
    response.end('Works');
}



// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function (session) {
    session.send("You said: %s", session.message.text);
});

module.exports.connector = connector;