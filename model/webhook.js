const mongoose = require('mongoose')

var punchSchema = new mongoose.Schema(
    {   id:Number,
        payload: {},
        auth:{ type: Boolean, default:false },
        timestamp: { type: Date, default: Date.now() }
    }
)

module.exports = mongoose.model('punchs', punchSchema);