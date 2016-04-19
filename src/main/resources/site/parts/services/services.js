var lib2render = require('/lib/rbrastad/lib2render');
var viewSources = require('/lib/viewSources.js');

function handleGet(req) {
    var content =  lib2render.part.resolveComponentContent();
    var config = content.component.config;

    lib2render.log.debug({
        name: 'Services',
        json : content
    });

    if( lib2render.util.notEmptyOrNull( config.services.contentSourcePageKey ) ) {
        // Get children of pagekey
        var contents = lib2render.content.getChildren( config.services.contentSourcePageKey );
        // Do a random sort of the service elements
        content.contents = lib2render.util.sortRandom(contents);

       return lib2render.part.renderView( viewSources.viewService , content);
    }else{
        return lib2render.part.renderView(viewSources.view412 ,null);
    }
}

exports.get = handleGet;

