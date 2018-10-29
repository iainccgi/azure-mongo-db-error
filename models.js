var mongoose = require('mongoose');

var ModelA = mongoose.model('ModelA', new mongoose.Schema({
    conversationID: { type: String, required: true, index: true, unique: true  },
    client: { type: Object, required: true },
}));

var ModelB = mongoose.model('ModelB', new mongoose.Schema({
    conversationID: { type: String, required: true },
    client: { type: Object, required: true },
    business: Object,
    discourse: [{
        correlationID: { type: String, required: true, index: true, unique: true  },
    }]
}));

var ModelC = mongoose.model('ModelC', new mongoose.Schema({
    conversationID: { type: String, required: true },
    client: { type: Object, required: true },
    business: Object,
    discourse: [{
        correlationID: { type: String, required: true },
        messages: [{
            messageID: { type: String, required: true, index: true, unique: true },
            timestamp: { type: Object, required: true },
        }]
    }]
}));

module.exports = {
    ModelA,
    ModelB,
    ModelC
}
