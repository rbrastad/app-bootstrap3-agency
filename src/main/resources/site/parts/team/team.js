var lib2render = require('/lib/rbrastad/lib2render');
var app = require('/lib/app.js');

function handleGet(req) {
    var componentContent =  lib2render.part.resolveComponentContent();

    if( lib2render.util.notEmptyOrNull(componentContent.component.config.person ) ) {
        // Convert the Person object into an a array for easier rendering.
        componentContent.component.config.person =  lib2render.util.toArray( componentContent.component.config.person );

        return lib2render.part.renderView(app.viewTeam , componentContent);
    }else
        return lib2render.part.renderView( app.view412 , null);

}

exports.get = handleGet;