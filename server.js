(()=>{
    'use strict';

    const express = require('express');
    const routes = require(process.cwd() + '/app/routes');

    const app = express();
    app.enable('trust proxy');
    routes(app);

    const port = process.env.PORT || 3000;

    app.listen(port, ()=>{
        console.log('App listening on port '+port);
    });

})();