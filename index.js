var critical = require('critical');

critical.generate({
    // Inline the generated critical-path CSS
    // - true generates HTML
    // - false generates CSS
    inline: false,

    // Your base directory
    base: __dirname,

    // HTML source file
    src: 'index.html',

    // Your CSS Files (optional)
    css: ['styles/style.css'],

    // Viewport width
    width: 1440,

    // Viewport height
    height: 900,

    // Target for final HTML output.
    // use some CSS file when the inline option is not set
    dest: 'styles/style.crit.min.css',

    // Minify critical-path CSS when inlining
    minify: true,

    // Extract inlined styles from referenced stylesheets
    /*extract: true,*/

    // Complete Timeout for Operation
    timeout: 30000,

    // Prefix for asset directory
    pathPrefix: '/loveweeklymagazine',

    // ignore CSS rules
    ignore: ['font-face',/some-regexp/],

    // overwrite default options
    ignoreOptions: {}
});