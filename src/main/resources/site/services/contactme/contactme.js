var content = require('/lib/xp/content');
var context = require('/lib/xp/context');
var portal = require('/lib/xp/portal');
var lib2render = require('/lib/rbrastad/lib2render');

function saveForm(data) {
    return content.create({
        parentPath:  portal.getSite()["_path"] + '/contact-me',
        contentType: app.name + ':contact-me',
        displayName: 'Contact form',
        data: {
            fields: data.fields
        }
    });
}

exports.post = function(req) {

    lib2render.log.debug({
        name: 'Service contact me form sent in ',
        json : req.params
    });

    var fields = req.params;

    var entry = context.run({
            branch: 'draft',
            user: {
                login: 'su',
                userStore: 'system'
            }
        },
        saveForm.bind(this, fields));

    return {
        body: JSON.stringify(entry),
        contentType: 'application/json'
    };
}
