var lib2render = require('/lib/rbrastad/lib2render');
var viewSources = require('/lib/viewSources.js');

function handleGet(req) {

   var currentContent = viewSources.viewServiceDetails;

   lib2render.log.debug({
        name: 'Service Details',
        json : currentContent
    });
    return lib2render.part.renderViewCurrentContent( currentContent );
}

exports.get = handleGet;