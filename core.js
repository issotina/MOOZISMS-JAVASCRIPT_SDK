var https = require('http');
module.exports = {
    execReq : function (key, secret,to,from,msg) {
        var data = JSON.stringify({
            api_key: key,//
            api_secret: secret,//
            to: to,
            from: from,
            datatype: 'json', // or datatype= 'xml'
            text: msg
        });
        var options = {
            host: 'api.moozisms.com',
            path: '/',
            //port: 443,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(data)
            }
        };

        var req = https.request(options);

        req.write(data);
        req.end();

        var responseData = '';
        req.on('response', function(res){
            res.on('data', function(chunk){
                responseData += chunk;
            });

            res.on('end', function(){
                console.log(JSON.parse(responseData));
            });
        });
    }
}




