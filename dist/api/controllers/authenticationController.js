'use strict';

var authenticate = require('../../helpers/authentication');

exports.authenticate = function (req, res) {
    if (authenticate(req.query.username, req.query.password)) {
        res.status(200).send("Authenticated");
        return;
    }

    res.status(401).send("Authorization required");
};