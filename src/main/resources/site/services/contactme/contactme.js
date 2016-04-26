var contentLib = require('/lib/xp/content');
var contextLib = require('/lib/xp/context');
var portalLib = require('/lib/xp/portal');
var lib2render = require('/lib/rbrastad/lib2render');

function saveForm(data) {
    return contentLib.create({
        parentPath: data.path ,
        contentType: 'base:unstructured',
        displayName: 'Contact Me: ' + data.name,
        data: data
    });
}

exports.post = function(req) {
    var data = req.params;

    data.path = portalLib.pageUrl({id: data.contentDestinationKey });
    data.path = data.path.substr(  data.path.indexOf( portalLib.getSite()["_path"] ) );

    var entry = contextLib.run({
            branch: 'draft',
            user: {
                login: 'su',
                userStore: 'system'
            }
        },
        saveForm.bind(this, data));

    return {
        body: JSON.stringify(entry),
        contentType: 'application/json'
    };
}