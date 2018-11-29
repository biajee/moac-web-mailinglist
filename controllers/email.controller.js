const Email = require('../models/email.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.create = function (req, res) {
    console.log('req.body', req.body);
    let email = new Email(
        {
            email: req.body.email
        }
    );

    email.save(function (err) {
        if (err) {
            console.log('err', err);
            return next(err);
        }
        res.send({'msg':'Email Created successfully', 'success': true});
    })
};

exports.getList = function (req, res) {
    Email.find({}, function (err, emails) {
        console.log('emails', emails);
        var emailsString = '';
        var len = emails.length;
        for (var i=0; i<len; i++) {
            emailsString += emails[i].email;
            if (i<len-1) {
                emailsString += ',';
            }
        }
        if (err) return next(err);
        res.send(emailsString);
    })
};
