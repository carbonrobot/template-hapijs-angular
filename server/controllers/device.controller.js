var config = require('../../config'),
    mongoose = require('mongoose'),
    mq = require('../services/mq.service');

// stations api
function DeviceController() {

    function list(request, reply) {
        var Device = mongoose.model('Device');
        Device.find({}, function(err, devices) {
            return reply(devices);
        });
    }

    function update(request, reply) {
        var id = request.payload._id;

        var Device = mongoose.model('Device');
        Device.findById(id, function(err, device) {
            if (err)
                return reply(Boom.badImplementation('Updating device failed.'));

            device = device || new Device();
            device.name = request.payload.name;
            device.content = request.payload.content;
            device.save(function(err) {
                if (err) {
                    return reply(Boom.badImplementation('Updating device failed.'));
                } else {

                    // notify mq
                    mq.publish(device.name).then(function(){
                        console.log('[mq] completed')
                    }, function(err){
                        console.log(err);
                    });

                    return reply(device);
                }
            });
        });
    }

    return {
        list: list,
        update: update
    };
};

module.exports = DeviceController();