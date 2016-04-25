var lib2render = require('/lib/rbrastad/lib2render');
var viewSources = require('/lib/viewSources.js');
var portalLib = require('/lib/xp/portal');

function handleGet(req) {
    var content = portalLib.getContent();

    var params = {
        data: content.data
    };

    return lib2render.part.renderView( viewSources.pageUnStructuredViewer , params);
}

exports.get = handleGet;