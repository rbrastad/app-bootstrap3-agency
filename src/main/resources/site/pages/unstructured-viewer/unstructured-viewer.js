var libs = {
    portal: require('/lib/xp/portal'),
    thymeleaf: require('/lib/xp/thymeleaf'),
};

function handleGet(req) {
    var content = libs.portal.getContent();

    var params = {
        data: content.data
    };

    var view = resolve('unstructured-viewer.html');
    return libs.thymeleaf.render(view, params)

}

exports.get = handleGet;