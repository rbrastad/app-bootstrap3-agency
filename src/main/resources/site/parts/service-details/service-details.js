var lib2render = require('/lib/rbrastad/lib2render');
var app = require('/lib/app.js');

function handleGet(req) {
    return lib2render.part.renderViewCurrentContent( app.viewServiceDetails );
}

exports.get = handleGet;