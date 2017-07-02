# MOOZISMS-JAVASCRIPT_SDK
Javascript client for send sms via moozisms platform

>Before using this sdk ensure you have your API keys and acces Token else you can get it at moozisms.com/dashboard

###INSTALL MODULE
```javascript
   npm install moozisms-js
```

###USAGE
```javascript
    var moozi = require('moozisms-js')

    var sender = new moozi(/*ACCOUNT_SID*/,/*AUTH_TOKEN*/)

    sender.send(/*Sender Alphanumeric ID*/,/*Receiver phone Number*/,/*Message Body*/);
```

####Enjoy your code
