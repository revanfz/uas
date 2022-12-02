const express = require('express');
const serverless = require('serverless-http')
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
app.use(bodyParser.json());

router.get('/', (req, res) => {
    res.json({
        hello: 'hello'
    });
});

app.use('/.netlify/pam/api', router);

module.exports.handler = serverless(app);