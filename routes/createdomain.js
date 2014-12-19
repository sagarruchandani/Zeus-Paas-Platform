var Route53 = require('nice-route53');

var r53 = new Route53({
accessKeyId :  "AKIAJQP7U5B7N2RG5MZA",
secretAccessKey :"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" 
});

module.exports = {
getZoneDetails: function(){
r53.zones(function(err, zones) {
if(err)
	{
	console.log("Error While getting Domain names ");
	}
});

},

createDomain : function(args){
r53.setRecord(args,function(err,res){

console.log(res);
});

}


};
