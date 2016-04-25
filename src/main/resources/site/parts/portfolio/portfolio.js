var lib2render = require('/lib/rbrastad/lib2render');
var viewSources = require('/lib/viewSources.js');

function handleGet(req) {
    var content =  lib2render.part.resolveComponentContent();
    var config = content.component.config;

    if(  lib2render.util.notEmptyOrNull( config.portfolio.contentSourcePageKey ) ) {
        content.contents = lib2render.content.getChildren( config.portfolio.contentSourcePageKey );

        lib2render.log.debug({
            name: 'Portfolio',
            msg: 'Portfolio part',
            json : content
        });

        return lib2render.part.renderView( viewSources.viewPortfolio , content);
    }else
        return lib2render.part.renderView( viewSources.view412 , content);
}

exports.get = handleGet;