const mongoose = require('mongoose')

var punchSchema = new mongoose.Schema(
    {   id:Number,
        payload: {},
        timestamp: { type: Date, default: Date.now() }
    }
)

module.exports = mongoose.model('punchs', punchSchema);