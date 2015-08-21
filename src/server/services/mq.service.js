var config = require('../../config'),
    amqp = require('amqplib');

function mq() {

    var eventQueue = 'events';

    function publish(msg) {
        var open = amqp.connect(config.mqUrl);
        open = open.then(function(conn) {
            var ok = conn.createChannel();
            ok = ok.then(function(ch) {
                ch.assertQueue(eventQueue);
                ch.sendToQueue(eventQueue, new Buffer('something to do'));
            });
            return ok;
        });

        // logging errors
        open = open.then(null, console.warn);
        return open;
    }

    function subscribe(q) {
        var open = amqp.connect(config.mqUrl);
        open = open.then(function(conn) {
            var ok = conn.createChannel();
            ok = ok.then(function(ch) {
                ch.assertQueue(q);
                ch.consume(q, function(msg) {
                    if (msg !== null) {
                        console.log(msg.content.toString());
                        ch.ack(msg);
                    }
                });
            });
            return ok;
        });

        // logging errors
        open = open.then(null, console.warn);
        return open;
    }

    // testing
    subscribe(eventQueue);

    return {
        publish: publish
    };

}

module.exports = mq();
