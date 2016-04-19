var lib2render = require('/lib/rbrastad/lib2render');
var viewSources = require('/lib/viewSources.js');

function handleGet(req) {
    var content = lib2render.part.resolveComponentContent();
    var config = content.component.config;

    lib2render.log.debug({
        name: 'ABOUT',
        msg: 'This logs ABOUT part content data.',
        json : content
    });

    if( lib2render.util.notEmptyOrNull( config.about ) ){
        config.about = lib2render.util.toArray( config.about );

        return lib2render.part.renderView( viewSources.viewAbout , content);
    }else
        return lib2render.part.renderView( viewSources.view412 , content);
}

exports.get = handleGet;