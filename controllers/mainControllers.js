const mongoose = require('mongoose');

const webhook = require('../model/webhook');


async function addPunches(req, res) {

    let data = {};
    data.id = req.params.id;
    data.payload = req.body.payload;
    let punch = await webhook.create(data);
    return res.status(200).send({ message: "Punches created successfully", data: punch });
}


async function addPunches(req, res) {

    let data = {};
    data.id = req.user.id;
    data.auth=true;
    data.payload = req.body.payload;
    let punch = await webhook.create(data);
    return res.status(200).send({ message: "Punches created successfully", data: punch });
}

async function pushWebHooks(req, res) {

    let data = {};
    data.id = req.user.id;
    data.payload = req.body.payload;
    let punch = await webhook.create(data);
    return res.status(200).send({ message: "Punches created successfully", data: punch });
}

async function list(req, res) {
    let Tools = await webhook.find({});
    res.render('listMain.ejs', { result: Tools })
}
async function list24Hrs(req, res) {
    let Tools = await webhook.find({"timestamp": { $gt: new Date(Date.now() - 48*60*60 * 1000) }});
    res.render('listMain.ejs', { result: Tools })
}
// "timestamp": { $gt: new Date(Date.now() - 24*60*60 * 1000) }
    
module.exports = {

    list,
    addPunches
}