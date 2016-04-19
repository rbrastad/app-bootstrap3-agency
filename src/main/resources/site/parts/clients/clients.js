var lib2render = require('/lib/rbrastad/lib2render');
var viewSources = require('/lib/viewSources.js');

function handleGet(req) {
    var componentContent =  lib2render.part.resolveComponentContent();

    lib2render.log.debug({
        name: 'Clients',
        json : componentContent
    });

    if( lib2render.util.notEmptyOrNull(componentContent.component.config.client ) ) {
        // Convert the Client object into an a array for easier rendering.
        componentContent.component.config.client =  lib2render.util.toArray( componentContent.component.config.client );

        return lib2render.part.renderView(viewSources.viewClients , componentContent);
    }else
        return lib2render.part.renderView( viewSources.view412 , null);

}

exports.get = handleGet;