
function log(req, res, next) {
    console.log('logging...');
    next();
}


function aut(req, res, next) {
    console.log('auttt...');
    next();
}

module.exports.log = log;
module.exports.aut = aut;