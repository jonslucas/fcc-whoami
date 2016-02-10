(()=>{
    'use strict';

    const Parser = require(process.cwd() + '/app/controllers/headerParser');

    module.exports = (a) => {
        const parser = new Parser();
        a.route('/')
            .get(parser.whoAmI);
    };

})();