(function () {

    var cssFiles = [
        "./static/easycss-1.2.1.min.css"//基本样式
    ];

    var jsFiles = [

        /** 默认文件 */
        "./static/clay-1.4.0.min.js",//clay.js
        "./static/sizzle.min.js",//扩展选择器
        "./src/config.js"//配置文件

        /** 组件 */

    ];

    if (typeof exports != 'undefined') {
        exports.jsFiles = jsFiles;
        exports.cssFiles = cssFiles;
    } else {
        for (var i = 0; i < cssFiles.length; i++) {
            loadCss(cssFiles[i]);
        }
        for (var i = 0; i < jsFiles.length; i++) {
            loadJs(jsFiles[i]);
        }
    }

    function loadJs(path) {
        var scriptTag = document.createElement('script');
        scriptTag.type = 'text/javascript';
        scriptTag.src = path;
        document.write(outerHTML(scriptTag));
    }

    function outerHTML(node) {
        return (
            node.outerHTML ||
            (function (n) {
                var div = document.createElement('div'),
                    h;
                div.appendChild(n);
                h = div.innerHTML;
                div = null;
                return h;
            })(node)
        );
    }

    function loadCss(path) {
        var cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.type = 'text/css';
        cssLink.href = path;
        document.getElementsByTagName('head')[0].appendChild(cssLink);
    }
})();