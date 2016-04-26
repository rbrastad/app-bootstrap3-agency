var lib2render = require('/lib/rbrastad/lib2render');
var app = require('/lib/app.js');

function handleGet(req) {
    var componentContent = lib2render.part.resolveContentCurrentComponent();

    lib2render.log.debug({
        name: 'CONTACT',
        msg: 'Contact part',
        json : componentContent
    });

        componentContent.serviceUrl = lib2render.util.getServiceUrl(lib2render.part.getSite().data.siteConfig.applicationKey, 'contactme');

        return lib2render.part.renderView(app.viewContact, componentContent);
}

exports.get = handleGet;