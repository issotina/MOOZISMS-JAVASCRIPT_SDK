
this.ACCOUNT_SID = undefined
this.AUTH_TOKEN = undefined

function MOOZISMS(ACCOUNT_SID,AUTH_TOKEN) {
    this.ACCOUNT_SID = ACCOUNT_SID
    this.AUTH_TOKEN = AUTH_TOKEN
}

MOOZISMS.prototype.send = function send(from,to,body) {
    if(!this.ACCOUNT_SID) throw Error("ACCOUNT_SID is required")
    if(!this.AUTH_TOKEN) throw Error("AUTH_TOKEN is required")
   // console.log(this.AUTH_TOKEN);
    require('./core').execReq(this.ACCOUNT_SID,this.AUTH_TOKEN,
        to,from,body)
};

module.exports = MOOZISMS