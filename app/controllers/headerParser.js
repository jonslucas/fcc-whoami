(()=>{
    'use strict';

    function Parser() {
        this.whoAmI = (req, res) => {
            const ip = req.ip.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)[0],
                lang = req.get('Accept-Language').split(';')[0].split(',')[0],
                userA = req.get('User-Agent').split(/[\(\)]/)[1];
            res.json({
                "ipv4 address": ip,
                "language":lang,
                "software": userA
            });
            res.end();
        };
    }

    module.exports = Parser;
})();