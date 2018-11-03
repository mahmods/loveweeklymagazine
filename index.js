var critical = require('critical');

critical.generate({
    inline: true,
    base: __dirname,
    src: 'index-original.html',
    dest: 'index-critical.html',
    width: 1300,
    height: 900
});