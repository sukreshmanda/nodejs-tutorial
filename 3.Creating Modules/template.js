var url = 'https://sukreshphoto.blogspot.com';

function log(message){
   //Send http request
   console.log(message);
}
// To make it visible to outside simply export it

//module.exports = url
module.exports.log = log;
module.exports.siteUrl = url;

