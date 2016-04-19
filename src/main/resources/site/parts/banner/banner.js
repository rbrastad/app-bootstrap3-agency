var lib2render = require('/lib/rbrastad/lib2render');
var viewSources = require('/lib/viewSources.js');

function handleGet(req) {
    var componentContent = lib2render.part.resolveComponentContent();

    if( lib2render.util.notEmptyOrNull(componentContent.component.config.banners ) ) {
        var bannerArray = lib2render.util.sortRandomSlice(componentContent.component.config.banners, 0, 1)

        var banner = bannerArray;
        if ( Array.isArray(bannerArray) ) {
            banner = bannerArray[0];
        }

        banner.backgroundImageURL= lib2render.util.getImageUrl(banner.backgroundImage, '(1,1)');

        var content = {
            component: componentContent,
            banner: banner
        };

        var pageContributions = {
            "bodyEnd": ['<script type="text/javascript">$( document ).ready(function() { $("nav").removeClass("navbar-shrink") });</script>']
        };

        lib2render.log.debug({
            name: 'BANNER',
            msg: 'Banner part',
            json : content
        });

        return lib2render.part.renderView( viewSources.viewBanner , content, pageContributions);
    }else
        return lib2render.part.renderView( viewSources.view412 , null);

}

exports.get = handleGet;
