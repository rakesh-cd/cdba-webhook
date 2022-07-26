const express = require('express');
const _ = require("lodash");
var jwt = require('jsonwebtoken');
require('./model/db');
const app = express();
const controllers = require('./controllers/mainControllers')
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.render('main.ejs')
})
app.post('/pushPunch/:id', controllers.addPunches);
app.get('/getauth/:id', async (req, res) => {
    var token = await jwt.sign({ id: req.params.id }, '342rwerWERasaxfj23dsf2324');
    res.status(200).json({ token: token });

});

app.post('/pushPunchWithAuth', (req, res, next) => {

    if (req.method !== "OPTIONS") {
        const { headers } = req;
        if (_.isEmpty(headers.authorization)) {
            res.status(401).json({ error: ("ERR_UNAUTH") });
        } else {
            try {
                console.log(headers.authorization)
                const decoded = jwt.verify(headers.authorization, '342rwerWERasaxfj23dsf2324');
                console.log(decoded)
                req.user=decoded;
                next();
            }
            catch (error) {
                res.status(401).json({ error: ("ERR_UNAUTH") });
            }

        }
    }

}, controllers.addPunchesAuth);
app.get('/listall', controllers.list);
// list24Hrs

app.listen(PORT, () => {

    console.log("node runnig");
})