var lib2render = require('/lib/rbrastad/lib2render');
var app = require('/lib/app.js');

function handleGet(req) {
    var content =  lib2render.part.resolveComponentContent();
    var config = content.component.config;

    if(  lib2render.util.notEmptyOrNull( config.portfolio.contentSourcePageKey ) ) {
        content.contents = lib2render.content.getChildren( config.portfolio.contentSourcePageKey );

        return lib2render.part.renderView( app.viewPortfolio , content);
    }else
        return lib2render.part.renderView( app.view412 , content);
}

exports.get = handleGet;